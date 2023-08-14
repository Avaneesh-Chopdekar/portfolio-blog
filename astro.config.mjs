import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://avaneesh.vercel.app',
  integrations: [mdx(), sitemap(), tailwind(), react()],
  markdown: {
    shikiConfig: {
      theme: 'dark-plus',
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true
    }
  }
});