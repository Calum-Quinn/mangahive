import { redirect } from "@sveltejs/kit";
import db from '$lib/server/db';
import { getUserBySessionId, getUserMangas } from '$lib/server/db';
import { get } from "svelte/store";

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    const sessionId = cookies.get('session');

    if (!sessionId) {
        // If no session ID is found, redirect to the sign-in page
        throw redirect(302, '/signin');
    }

    const user = await getUserBySessionId(sessionId);

    if (user) {
        return {
            user_mangas: await getUserMangas(user.id)
        };
    }

    throw redirect(302, '/signin');
}