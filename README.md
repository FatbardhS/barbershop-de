# Barbershop website

Astro + Tailwind CSS site for a barbershop.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

- Content (name, prices, barbers, hours, booking link): `src/data/shop.ts`
- Colors and fonts: the `@theme` block in `src/styles/global.css`
- Page sections: `src/components/`

## Note on versions

This uses Astro 5 with `vite` pinned to 6 via `overrides` in `package.json`. Newer Astro and Vite versions
use the Rolldown bundler, and this machine's Windows Application Control policy blocks its native
binary from loading. Remove the override once that's no longer an issue.
