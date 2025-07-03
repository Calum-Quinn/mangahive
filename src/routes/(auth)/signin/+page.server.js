import { fail, redirect } from '@sveltejs/kit';
import db, { getUserByUsername } from '$lib/server/db';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

export const actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData();
        const username = formData.get('username')?.toString();
        const password = formData.get('password')?.toString();

        if (!username || !password) {
            return fail(400, { error: 'Tous les champs sont nécessaires.'});
        }

        const user = await getUserByUsername(username);

        if (!user) {
            return fail(404, { error: 'Nom d\'utilisateur faux' });
        }

        // Verify password
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return fail(401, { error: 'Mot de passe incorrect' });
        }

        const sessionId = crypto.randomUUID();
        const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

        try {
            await db.query(
                'INSERT INTO sessions (id, username, expires_at) VALUES ($1,$2,$3)',
                [sessionId, username, expiresAt]
            );

            cookies.set('session_id', sessionId, {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                secure: false,
                maxAge: 60 * 60 // 1 hour
            });
        } catch (err) {
            console.error('DB error: ', err);
            return fail(500, { error: 'Database error' });
        }

        throw redirect(302, '/'); // Redirect to home page after successful login
    }
};