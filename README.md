# Aerial — website (v4)

Source for [aerialscreensaver.github.io](https://aerialscreensaver.github.io). Written in [Astro](https://astro.build) 7 with Tailwind v4. Marketing content is plain Markdown; the developer documentation under `src/content/docs/` is MDX rendered by [Starlight](https://starlight.astro.build).

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

A GitHub Action (`.github/workflows/deploy.yml`) builds `main` and syncs `dist/` into the **root** of `gh-pages`, preserving an allowlist of app-facing files (`appcast.xml`, `manifest.json`, `Aerial-*.md`, `community*/`, `thumbnails/`). Triggers:

- Pushes to `main` that touch source files, the config, the lockfile or the workflow.
- Pushes to `gh-pages` that touch `appcast.xml` or `Aerial-*.md` (so a release auto-updates the homepage).

Anything under `dist/` that is not on the allowlist is deployed as is, so a new top-level route (for example `developers/`) needs no workflow change. The `/v4/` side-by-side preview used before the cutover is gone; `BASE` in `astro.config.mjs` is `/`.

## Content

- **Features** — `src/content/features/*.md`
- **FAQ** — `src/content/faq/*.md`
- **Release notes** — sourced from `Aerial-*.md` files on `gh-pages` root (read at build time, not stored here).
- **Developer docs** — `src/content/docs/developers/*.mdx`, published under `/developers/` by Starlight. Site-wide links (header and both footers) come from `src/data/siteLinks.ts`.
  - `src/components/starlight/` overrides Starlight's chrome (header, footer, page title, theme) so docs pages share the site's navigation and dark palette; `src/styles/starlight.css` maps Starlight's `--sl-*` variables onto the aerial tokens in `src/styles/tokens.css`. Starlight pages must never import `global.css` (Tailwind preflight breaks Starlight), and marketing pages must never import `starlight.css`.
  - `src/components/docs/` is the article kit (`Figure`, `Observed`, `SeeAlso`); everything else comes from `@astrojs/starlight/components`.
  - Conventions: second person, "the sample" as the actor for code, no first person; every undocumented claim in an `<Observed on="macOS …">` callout; frontmatter `kind`, `availability`, `module`, `repo` feed the article header; links to developer.apple.com get an "Apple" pill and do not wrap, so keep their text short. Articles marked `draft: true` render in `npm run dev` only.
