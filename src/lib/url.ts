// Prefixes a site path with the deploy base (e.g. /barbershop-de on GitHub Pages),
// so links and images work whether the site lives at the domain root or in a subfolder.
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export const url = (path: string) => `${base}${path}`;
