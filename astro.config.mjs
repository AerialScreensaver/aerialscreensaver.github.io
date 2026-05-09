// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// CUTOVER TOGGLE: set base to '/' when v4 replaces the legacy site at root.
// During preview, '/v4/' so the new site lives at https://aerialscreensaver.github.io/v4/
// alongside the existing site at the root.
const BASE = '/v4/';

export default defineConfig({
  site: 'https://aerialscreensaver.github.io',
  base: BASE,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), sitemap()],
});
