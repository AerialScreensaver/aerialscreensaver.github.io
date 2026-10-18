/**
 * Single source of truth for the site's navigation links.
 *
 * Consumed by Nav.astro and Footer.astro (marketing pages) and by the Starlight
 * overrides in src/components/starlight/ (developer docs), so a new section is
 * added here once and appears everywhere.
 */
export interface SiteLink {
  /** Site-relative path (`/faq`) or, with `external: true`, a full URL. */
  href: string;
  label: string;
  external?: boolean;
}

/** Prefix the configured BASE_URL (without its trailing slash) onto a site-relative path. */
export const withBase = (path: string): string =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;

/** Resolve a link to the href to render; external links pass through untouched. */
export const hrefFor = (link: SiteLink): string => (link.external ? link.href : withBase(link.href));

/**
 * Whether `currentPath` is the link's page or one of its descendants, so that
 * `/developers/appex-screensaver/` lights up the "Developers" entry.
 */
export const isActive = (currentPath: string, link: SiteLink): boolean => {
  if (link.external) return false;
  const target = withBase(link.href).replace(/\/$/, '');
  const current = currentPath.replace(/\/$/, '');
  return current === target || current.startsWith(`${target}/`);
};

export const GITHUB_URL = 'https://github.com/AerialScreensaver/Aerial';

/** Header navigation, in display order. */
export const navLinks: SiteLink[] = [
  { href: '/features', label: 'Features' },
  { href: '/expansions', label: 'Expansions' },
  { href: '/release-notes', label: 'Release notes' },
  { href: '/faq', label: 'FAQ' },
  { href: '/developers', label: 'Developers' },
  { href: GITHUB_URL, label: 'GitHub', external: true },
];

/** Footer "Project" column. */
export const projectLinks: SiteLink[] = [
  { href: '/features', label: 'Features' },
  { href: '/release-notes', label: 'Release notes' },
  { href: '/expansions', label: 'Expansions' },
  { href: '/faq', label: 'FAQ' },
  { href: '/developers', label: 'Developers' },
  { href: '/legal', label: 'Legal' },
];

/** Footer "Source & community" column. */
export const communityLinks: SiteLink[] = [
  { href: GITHUB_URL, label: 'Aerial on GitHub', external: true },
  { href: 'https://github.com/JohnCoates/Aerial', label: 'Original repository (2015)', external: true },
  { href: 'https://github.com/AerialScreensaver/Aerial/issues', label: 'Report an issue', external: true },
  { href: 'https://discord.com/invite/TPuA5WG', label: 'Join the Discord', external: true },
];
