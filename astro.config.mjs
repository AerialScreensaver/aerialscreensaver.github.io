// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Cutover complete: the new site lives at the gh-pages root. To restore
// the side-by-side preview at /v4/, flip BASE back to '/v4/' and revert the
// deploy step in .github/workflows/deploy.yml.
const BASE = '/';

export default defineConfig({
  site: 'https://aerialscreensaver.github.io',
  base: BASE,
  // Astro 7 defaults to 'jsx', which drops the whitespace between inline
  // elements and would glue words to the links in the copy. `true` keeps the
  // pre-7 behaviour (collapse runs of whitespace, keep a single space).
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
