import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  server: {
    port: 3000
  },
  integrations: [tailwind()]
});