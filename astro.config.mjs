import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://papers.mheravi.ir',
  integrations: [sitemap()],
});
