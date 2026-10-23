// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Published on GitHub Pages at https://fatbardhs.github.io/barbershop-de/.
// With a custom domain later, set `site` to that domain and remove `base`.
export default defineConfig({
  site: "https://fatbardhs.github.io",
  base: "/barbershop-de",
  vite: {
    plugins: [tailwindcss()],
  },
});
