import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'REPLACE_SITE_URL',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
