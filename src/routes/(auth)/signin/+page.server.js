import { fail, redirect } from '@sveltejs/kit';
import db, { getUserByUsername } from '$lib/server/db';
import bcrypt from 'bcrypt';

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const username = formData.get('username')?.toString();
        const password = formData.get('password')?.toString();

        if (!username || !password) {
            return fail(400, { error: 'Tous les champs sont nécessaires.'});
        }

        const user = await getUserByUsername(username);

        if (!user) {
            console.log('Aucun utilisateur trouvé avec ce nom.')
        } else {
            // Verify password
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    console.error('Erreur de comparaison de mdp: ', err);
                    return fail(500, { error: 'Erreur interne du serveur' });
                }

                if (!result) {
                    // Password does not match
                    return fail(401, { error: 'Mot de passe incorrect' });
                }
            });
        }

        const sessionId = crypto.randomUUID();
        const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

        try {
            await db.query(
                'INSERT INTO sessions (id, username, expires_at) VALUES ($1,$2,$3)',
                [sessionId, username, expiresAt]
            );
        } catch (err) {
            console.error('DB error: ', err);
            return fail(500, { error: 'Database error' });
        }

        return { 
            success: true,
            message: 'Connexion réussie !',
        };
    }
};