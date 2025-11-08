import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://kiwiticket.github.io",

  output: "static",
  build: {
    assets: "assets",
  },
});
