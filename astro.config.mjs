// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Cutover complete: the new site lives at the gh-pages root. To restore
// the side-by-side preview at /v4/, flip BASE back to '/v4/' and revert the
// deploy step in .github/workflows/deploy.yml.
const BASE = '/';

export default defineConfig({
  site: 'https://aerialscreensaver.github.io',
  base: BASE,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), sitemap()],
});
