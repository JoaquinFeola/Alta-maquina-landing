import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://altamaquina.com',
  output: 'static',
  adapter: cloudflare(),
  vite: {
    plugins: tailwind()
  },
  integrations: [ react(), sitemap()],
});