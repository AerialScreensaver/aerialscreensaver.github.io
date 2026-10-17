import { XMLParser } from 'fast-xml-parser';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

export type ReleaseChannel = 'stable' | 'beta';

export interface AppcastRelease {
  version: string;
  channel: ReleaseChannel;
  buildNumber: number;
  pubDate: Date;
  pubDateLabel: string;
  downloadUrl: string;
  downloadSize: number;
  minSystemVersion: string;
  releaseNotesUrl: string;
}

/**
 * Website-hardcoded beta requirements. The appcast deliberately keeps
 * sparkle:minimumSystemVersion at 15.0 on beta items (Sparkle-side decision),
 * so the displayed beta requirement lives here. Update each beta cycle.
 * BETA_RECOMMENDED_ON may be left empty: the "recommended on" line is then
 * not rendered at all.
 */
export const BETA_MIN_MACOS = '26';
export const BETA_RECOMMENDED_ON = '';

/**
 * macOS marketing names, keyed by major version. Used wherever a version
 * number from the appcast is printed next to its name, so the name can
 * never drift from the number. Add a line each autumn.
 */
export const MACOS_CODENAMES: Record<string, string> = {
  '13': 'Ventura',
  '14': 'Sonoma',
  '15': 'Sequoia',
  '26': 'Tahoe',
  '27': 'Golden Gate',
};

/** "26.0" → "26"; "15" → "15". Tolerates the number the XML parser may hand over. */
export function macosMajor(version: string | number): string {
  const text = String(version ?? '');
  return text.split('.')[0] ?? text;
}

/** "26.0" → "macOS 26 (Tahoe)"; unknown majors print without a name. */
export function macosLabel(version: string | number): string {
  const major = macosMajor(version);
  const name = MACOS_CODENAMES[major];
  return name ? `macOS ${major} (${name})` : `macOS ${major}`;
}

interface RawItem {
  title: string;
  pubDate: string;
  'sparkle:version'?: string | number;
  'sparkle:channel'?: string;
  'sparkle:shortVersionString'?: string;
  'sparkle:minimumSystemVersion'?: string | number; // "26.0" parses as the number 26
  'sparkle:releaseNotesLink'?: string;
  enclosure: {
    '@_url': string;
    '@_length'?: string;
  };
}

const APPCAST_LIVE_URL = 'https://aerialscreensaver.github.io/appcast.xml';

/**
 * Where to read appcast.xml from, in order of preference:
 *   1. APPCAST_PATH env var (CI sets this to ./_deploy/appcast.xml).
 *   2. Sibling worktree at ../aerialscreensaver.github.io/appcast.xml (local dev convention).
 *   3. Fetch the live URL.
 */
async function fetchAppcastXml(): Promise<string> {
  const envPath = process.env.APPCAST_PATH;
  if (envPath && existsSync(envPath)) {
    return readFileSync(envPath, 'utf8');
  }

  const localPath = join(process.cwd(), '..', 'aerialscreensaver.github.io', 'appcast.xml');
  if (existsSync(localPath)) {
    return readFileSync(localPath, 'utf8');
  }

  const res = await fetch(APPCAST_LIVE_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch appcast: ${res.status} ${res.statusText}`);
  }
  return res.text();
}

function formatPubDate(d: Date): string {
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function toRelease(raw: RawItem): AppcastRelease {
  const pubDate = new Date(raw.pubDate);
  return {
    version: raw['sparkle:shortVersionString'] ?? raw.title,
    channel: raw['sparkle:channel'] === 'beta' ? 'beta' : 'stable',
    buildNumber: Number(raw['sparkle:version'] ?? NaN),
    pubDate,
    pubDateLabel: formatPubDate(pubDate),
    downloadUrl: raw.enclosure['@_url'],
    downloadSize: Number(raw.enclosure['@_length'] ?? 0),
    minSystemVersion: String(raw['sparkle:minimumSystemVersion'] ?? ''),
    releaseNotesUrl: raw['sparkle:releaseNotesLink'] ?? '',
  };
}

let cached: AppcastRelease[] | null = null;

export async function getAllReleases(): Promise<AppcastRelease[]> {
  if (cached) return cached;

  const xml = await fetchAppcastXml();
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
  });
  const parsed = parser.parse(xml);
  const channel = parsed?.rss?.channel;
  const items: RawItem[] = Array.isArray(channel?.item) ? channel.item : [channel?.item];
  if (!items?.length || !items[0]) {
    throw new Error('No <item> entries found in appcast.xml');
  }

  cached = items.filter((i) => i?.enclosure?.['@_url']).map(toRelease);
  return cached;
}

/**
 * True when a is strictly newer than b. Prefers sparkle:version (YYMMDD.HHMM
 * build numbers, numerically comparable); falls back to pubDate. Any
 * unresolvable comparison returns false, so a beta is never over-promoted.
 */
function isNewer(a: AppcastRelease, b: AppcastRelease): boolean {
  if (Number.isFinite(a.buildNumber) && Number.isFinite(b.buildNumber)) {
    return a.buildNumber > b.buildNumber;
  }
  return a.pubDate.getTime() > b.pubDate.getTime();
}

function newest(list: AppcastRelease[]): AppcastRelease {
  return list.reduce((best, r) => (isNewer(r, best) ? r : best));
}

export async function getLatestStable(): Promise<AppcastRelease> {
  const stable = (await getAllReleases()).filter((r) => r.channel === 'stable');
  if (!stable.length) {
    throw new Error('No stable release found in appcast.xml');
  }
  return newest(stable);
}

/**
 * The newest stable release that still runs on an older macOS than the
 * latest stable requires (today: 4.0.16 for Sequoia while 4.1.x needs
 * Tahoe). Null when every stable item shares the same minimum — callers
 * hide the "older Mac" card on null.
 */
export async function getLegacyStable(): Promise<AppcastRelease | null> {
  const latest = await getLatestStable();
  const latestMajor = Number(macosMajor(latest.minSystemVersion));
  if (!Number.isFinite(latestMajor)) return null;
  const older = (await getAllReleases()).filter((r) => {
    const major = Number(macosMajor(r.minSystemVersion));
    return r.channel === 'stable' && Number.isFinite(major) && major < latestMajor;
  });
  return older.length ? newest(older) : null;
}

/**
 * Latest beta, or null when there is no beta strictly newer than the latest
 * stable — callers hide all beta UI on null.
 */
export async function getLatestBeta(): Promise<AppcastRelease | null> {
  const betas = (await getAllReleases()).filter((r) => r.channel === 'beta');
  if (!betas.length) return null;
  const beta = newest(betas);
  return isNewer(beta, await getLatestStable()) ? beta : null;
}
