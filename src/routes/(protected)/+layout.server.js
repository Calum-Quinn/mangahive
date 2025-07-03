import { redirect } from '@sveltejs/kit';

// This file is used to protect routes that require authentication
// It checks if the user is authenticated and redirects to the sign-in page if not

export function load({ locals }) {
	if (!locals.user) {
		throw redirect(302, '/signin');
	}

	return { user: locals.user };
}
