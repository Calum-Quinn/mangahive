import { redirect } from '@sveltejs/kit';
import { getUserBySessionId, addManga } from '$lib/server/db';
import fs from 'fs/promises';
import path from 'path';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, cookies }) => {
    const sessionId = cookies.get('session');
    const user = await getUserBySessionId(sessionId);
    if (!user) throw redirect(302, '/signin');

    const form = await request.formData();
    const title = form.get('title');
    const author = form.get('author');
    const year = form.get('year');
    const image = form.get('image');

    if (!(image && image.name)) {
      return { status: 400, body: { error: 'Image manquante' } };
    }

    const buffer = Buffer.from(await image.arrayBuffer());
    const filename = Date.now() + '-' + image.name;
    const uploadPath = `static/uploads/${filename}`;
    await fs.mkdir('static/uploads', { recursive: true });
    await fs.writeFile(uploadPath, buffer);

    const imageUrl = `/uploads/${filename}`;

    await addManga({
      userId: user.id,
      title,
      author,
      year: parseInt(year),
      imageUrl
    });

    throw redirect(302, '/user/mangas');
  }
};
