// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://USERNAME.github.io',
  // Uncomment and update if deploying to a subpath (e.g., https://USERNAME.github.io/repo-name/)
  // base: '/repo-name',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});