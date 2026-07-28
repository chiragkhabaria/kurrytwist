// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Custom domain — site lives at the root, no base subpath needed
  site: 'https://kurrytwist.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});