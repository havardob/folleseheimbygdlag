// @ts-check
import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://folleseheimbygdlag.no",
  integrations: [sitemap(), react()],
  devToolbar: {
    enabled: false
  }
});