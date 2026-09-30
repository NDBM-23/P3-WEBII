// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://ndbm-p3-webii.netlify.app",
  integrations: [preact()],
});