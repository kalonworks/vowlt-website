// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://vowlt.app",
  trailingSlash: 'never',
  markdown: {
    shikiConfig: {
      themes: {
          light: 'github-light',
          dark: 'github-dark',
        },
      wrap: true,
    },
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
