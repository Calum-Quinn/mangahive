import { redirect } from "@sveltejs/kit";
import db from '$lib/server/db';

export async function GET({ cookies }) {
    const sessionId = cookies.get('session_id');

    if (sessionId) {
        try {
            // Delete the session from the database
            await db.query('DELETE FROM sessions WHERE id = $1', [sessionId]);
            cookies.delete('session_id', { path: '/' });
        } catch (err) {
            console.error('Error deleting session: ', err);
        }
    }

    throw redirect(302, '/mangahive/signin'); // Redirect to the sign-in page
}