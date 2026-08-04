import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import featuredEntries from '../data/future-macos-versions.json';

export type PackSlug = 'community-2020' | 'community-2026';

export interface ExpansionVideo {
  id: string;
  title: string;
  region: string;
  scene: string;
  timeOfDay: string;
  caption: string;
  thumbnailUrl: string;
}

interface RawAsset {
  id: string;
  title: string;
  accessibilityLabel?: string;
  scene?: string;
  timeOfDay?: string;
  pointsOfInterest?: Record<string, string>;
  previewImage?: string;
}

/**
 * Where to read a pack's entries.json from, in order of preference:
 *   1. EXPANSIONS_DIR env var (CI sets this to the gh-pages checkout).
 *   2. Sibling worktree at ../aerialscreensaver.github.io (local dev convention).
 *   3. Fetch the live URL.
 */
async function fetchEntriesJson(slug: PackSlug): Promise<string> {
  const candidates = [process.env.EXPANSIONS_DIR, join(process.cwd(), '..', 'aerialscreensaver.github.io'), join(process.cwd(), '_deploy')]
    .filter(Boolean)
    .map((dir) => join(dir as string, slug, 'entries.json'));

  for (const path of candidates) {
    if (existsSync(path)) return readFileSync(path, 'utf8');
  }

  const res = await fetch(`https://aerialscreensaver.github.io/${slug}/entries.json`);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${slug} entries: ${res.status} ${res.statusText}`);
  }
  return res.text();
}

function toVideo(raw: RawAsset): ExpansionVideo {
  return {
    id: raw.id,
    title: raw.title,
    region: raw.accessibilityLabel ?? '',
    scene: raw.scene ?? '',
    timeOfDay: raw.timeOfDay ?? '',
    caption: raw.pointsOfInterest?.['0'] ?? raw.title,
    thumbnailUrl: raw.previewImage ?? `https://aerialscreensaver.github.io/thumbnails/${raw.id}.png`,
  };
}

/**
 * The featured (paid) Future macOS Versions pack. Its entries.json is not
 * deployed on gh-pages — a trimmed copy is committed in src/data instead.
 */
export function getFeaturedPack(): ExpansionVideo[] {
  return (featuredEntries.assets as RawAsset[]).map(toVideo);
}

const cached = new Map<PackSlug, ExpansionVideo[]>();

/**
 * The pack's video list, or null when the data can't be loaded — callers
 * render their section without the visual showcase on null.
 */
export async function getCommunityPack(slug: PackSlug): Promise<ExpansionVideo[] | null> {
  const hit = cached.get(slug);
  if (hit) return hit;

  try {
    const parsed = JSON.parse(await fetchEntriesJson(slug));
    const assets: RawAsset[] = Array.isArray(parsed?.assets) ? parsed.assets : [];
    const videos = assets.filter((a) => a?.id && a?.title).map(toVideo);
    if (!videos.length) return null;
    cached.set(slug, videos);
    return videos;
  } catch {
    return null;
  }
}
