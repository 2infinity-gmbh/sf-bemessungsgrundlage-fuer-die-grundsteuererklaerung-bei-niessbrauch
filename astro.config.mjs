import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://bemessungsgrundlage-fuer-die-grundsteuererklaerung-bei-niessbrauch.de',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});