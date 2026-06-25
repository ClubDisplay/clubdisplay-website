import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const sitemapExclude = [
  "/display-kiosk/",
  "/hospitality-soundbar/",
  "/hotel-smart-iptv/",
  "/hotelontzorgd/",
  "/instore-sales-kiosk/",
  "/otrum-enterprise/",
  "/otrumcast/",
  "/pricing/",
  "/probeer-30-dagen-gratis/",
  "/public-proof-display/",
];

export default defineConfig({
  site: "https://clubdisplay.nl",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  integrations: [
    sitemap({
      filter: (page) => !sitemapExclude.some((path) => page.endsWith(path)),
    }),
  ],
});
