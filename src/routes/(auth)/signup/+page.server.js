import { error, fail } from '@sveltejs/kit';
import { redirect, setFlash } from 'sveltekit-flash-message/server';
import db from '$lib/server/db';
import bcrypt from 'bcrypt';

export const actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData();
        const firstname = formData.get('firstname')?.toString();
        const surname = formData.get('surname')?.toString();
        const username = formData.get('username')?.toString();
        const password = formData.get('password')?.toString();

        if (!firstname || !surname || !username || !password) {
            setFlash({ type: 'error', message: 'Tous les champs sont nécessaires.' }, cookies);
            return fail(400);
        }

        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            await db.query(
                'INSERT INTO users (firstname, surname, username, password) VALUES ($1,$2, $3, $4)',
                [firstname, surname, username, hashedPassword]
            );
        } catch (err) {
            console.error('DB error: ', err);
            setFlash({ type: 'error', message: 'Erreur de base de données.'}, cookies);
            return fail(500);
        }

        redirect('/signin', { type: 'success', message: 'Inscription réussie! Vous pouvez maintenant vous connecter.' }, cookies);
    }
};