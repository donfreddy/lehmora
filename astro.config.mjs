// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://lehmora.com",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  // Generated from the routes, with hreflang alternates for pages that exist
  // in both languages. x-default stays in each page's <head> (Layout.astro).
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "fr",
        locales: { fr: "fr", en: "en" },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
