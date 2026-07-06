# Aerial — website (v4)

Source for [aerialscreensaver.github.io](https://aerialscreensaver.github.io). Written in [Astro](https://astro.build) with Tailwind v4 and MDX.

## Branches

- **`main`** (this branch) — Astro source. Edit, build, deploy from here.
- **`gh-pages`** — what GitHub Pages serves. Holds the built site at the root plus the app-facing files (`appcast.xml`, `Aerial-*.md`, `community*/`, `thumbnails/`) that other tools and the in-app browser depend on. Don't hand-edit the built HTML there — the deploy Action overwrites it (preserving an allowlist of the app-facing files).

## Local development

```bash
npm install
npm run dev      # → http://localhost:4321/
npm run build    # → dist/
npm run preview  # serve the production build
```

`appcast.xml` is read from a sibling clone at `../aerialscreensaver.github.io/appcast.xml` if it exists; otherwise it's fetched from the live URL. So if you have both branches checked out as separate worktrees (recommended), version data flows in automatically.

## Release channels

The site derives both release channels from the appcast at build time (`src/lib/appcast.ts`):

- **Stable** — the newest item without a `<sparkle:channel>` tag. Drives the version badge, the primary download buttons, and the download page copy.
- **Beta** — the newest item with `<sparkle:channel>beta</sparkle:channel>`, shown (hero secondary button, download-page beta card) only when it is strictly newer than the latest stable, compared by `sparkle:version` build number. When a stable release catches up, all beta UI disappears on the next rebuild.

The beta's displayed OS requirement is **not** read from the appcast (beta items deliberately keep `minimumSystemVersion` 15.0 for Sparkle): it's hardcoded as `BETA_MIN_MACOS` / `BETA_RECOMMENDED_ON` in `src/lib/appcast.ts`. Update those constants each beta cycle.

## Deployment

A GitHub Action (`.github/workflows/deploy.yml`) builds and copies `dist/` into `gh-pages:/v4/`. Triggers:

- Pushes to `main` that touch source files.
- Pushes to `gh-pages` that touch `appcast.xml` or `Aerial-*.md` (so a release auto-updates the homepage).

The Action only writes inside `gh-pages:/v4/`. The legacy site, app-facing files, and thumbnails are never modified by it.

## Cutover

When v4 replaces the legacy site at the root, set `BASE = '/'` in `astro.config.mjs` and update the deploy step to write to the gh-pages root with a preserve-allowlist that keeps `appcast.xml`, `Aerial-*.md`, `community/**`, `community-2020/**`, `thumbnails/**`. See the project plan for details.

## Content

- **Features** — `src/content/features/*.md`
- **FAQ** — `src/content/faq/*.md`
- **Release notes** — sourced from `Aerial-*.md` files on `gh-pages` root (read at build time, not stored here).
