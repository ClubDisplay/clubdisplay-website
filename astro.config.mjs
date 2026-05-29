import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://clubdisplay.nl",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
});
