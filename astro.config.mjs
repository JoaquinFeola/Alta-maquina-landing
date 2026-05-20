import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://altamaquina.com',
  output: 'static',
  adapter: cloudflare(),
  // Inline all CSS to eliminate render-blocking requests
  // (Acceptable for a 2-page landing — total CSS is small)
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [tailwind(), react(), sitemap()],
});