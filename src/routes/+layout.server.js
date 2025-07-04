import { loadFlash } from "sveltekit-flash-message/server";

/** @type {import('@sveltejs/kit').Load} */
export const load = loadFlash(({ locals }) => {
  return { user: locals.user ?? null };
});
