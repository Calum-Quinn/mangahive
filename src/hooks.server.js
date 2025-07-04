import db from '$lib/server/db';
import { getUserBySessionId } from '$lib/server/db';

export async function handle({ event, resolve }) {
    const sessionId = event.cookies.get('session');

    if (sessionId) {
        const user = await getUserBySessionId(sessionId);

        if (user) {
            event.locals.user = user;
        }
    }

    return await resolve(event);
}