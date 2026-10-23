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

## Publishing (Vercel)

The site is published with [Vercel](https://vercel.com): every push to `main` on GitHub is built and deployed
automatically. Vercel detects Astro on its own, so no settings are needed. On Vercel the site is served from the
domain root; other builds use the `/barbershop-de` subfolder (see `astro.config.mjs`).

## Bookings (Supabase)

Taken time slots are stored in a free Supabase database, so the same barber can't be booked twice at the same time.

1. Create a free project at [supabase.com](https://supabase.com) (choose an EU region, e.g. Frankfurt).
2. Open **SQL Editor**, paste [`supabase/booking.sql`](supabase/booking.sql) and click **Run**.
3. Copy the **Project URL** and the **publishable (anon) key** from **Project Settings → API** into
   `supabaseUrl` and `supabaseAnonKey` in `src/data/shop.ts`.

Bookings appear under **Table Editor → bookings**. To cancel one and free the slot, set `cancelled` to `true` or
delete the row. Until the two values are filled in, the popup only emails requests and doesn't block slots.

## Note on versions

This uses Astro 5 with `vite` pinned to 6 via `overrides` in `package.json`. Newer Astro and Vite versions
use the Rolldown bundler, and this machine's Windows Application Control policy blocks its native
binary from loading. Remove the override once that's no longer an issue.
