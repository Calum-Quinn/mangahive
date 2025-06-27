import { fail, redirect } from '@sveltejs/kit';
import db from '$lib/server/db';
import bcrypt from 'bcrypt';

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const firstname = formData.get('firstname')?.toString();
        const surname = formData.get('surname')?.toString();
        const username = formData.get('username')?.toString();
        const password = formData.get('password')?.toString();

        if (!firstname || !surname || !username || !password) {
            return fail(400, { error: 'Tous les champs sont nécessaires.'});
        }

        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            await db.query(
                'INSERT INTO users (firstname, surname, username, password) VALUES ($1,$2, $3, $4)',
                [firstname, surname, username, hashedPassword]
            );
        } catch (err) {
            console.error('DB error: ', err);
            return fail(500, { error: 'Database error' });
        }

        return { 
            success: true,
            message: 'Compte créé'
        };
    }
};