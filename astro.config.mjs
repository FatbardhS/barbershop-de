// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Vercel serves the site at the domain root. Elsewhere (e.g. GitHub Pages at
// fatbardhs.github.io/barbershop-de) it lives in a subfolder.
const onVercel = Boolean(process.env.VERCEL);

export default defineConfig({
  site: onVercel && process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://fatbardhs.github.io",
  base: onVercel ? "/" : "/barbershop-de",
  vite: {
    plugins: [tailwindcss()],
  },
});
