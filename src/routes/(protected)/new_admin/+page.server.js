import { redirect, fail } from '@sveltejs/kit';
import {
  getUserBySessionId,
  addManga,
  addVolume,
  getMangas
} from '$lib/server/db';
import fs from 'fs/promises';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, cookies }) => {
    const form = await request.formData(); // ✅ only once
    const formType = form.get('formType'); // then use it

    if (formType === 'addSeries') {
      const title = form.get('title');
      const author = form.get('author');
      const description = form.get('description');
      const year = form.get('year');
      const image = form.get('image');

      if (!(image && image.name)) {
        return fail(400, { error: 'Image manquante' });
      }

      const buffer = Buffer.from(await image.arrayBuffer());
      const filename = Date.now() + '-' + image.name;
      const uploadPath = `static/uploads/${filename}`;
      await fs.mkdir('static/uploads', { recursive: true });
      await fs.writeFile(uploadPath, buffer);

      const imageUrl = `/uploads/${filename}`;

      await addManga({
        title,
        author,
        description,
        year: parseInt(year),
        imageUrl
      });

    } else if (formType === 'addVolume') {
      const mangaId = form.get('mangaId');
      const volumeNumber = form.get('volumeNumber');
      const releaseDate = form.get('releaseDate');
      const image = form.get('image');

      if (!volumeNumber || !releaseDate) {
        return fail(400, { error: 'Champs du tome manquants' });
      }

      const imageUrl = null;

      if (image) {
        const buffer = Buffer.from(await image.arrayBuffer());
        const filename = Date.now() + '-' + image.name;
        const uploadPath = `static/uploads/${filename}`;
        await fs.mkdir('static/uploads', { recursive: true });
        await fs.writeFile(uploadPath, buffer);

        imageUrl = `/uploads/${filename}`;
      }

      await addVolume({
        mangaId: parseInt(mangaId),
        volumeNumber: parseInt(volumeNumber),
        releaseDate: new Date(releaseDate),
        imageUrl
      });

    } else {
      return fail(400, { error: 'Type de formulaire inconnu' });
    }

    throw redirect(302, '/user/mangas');
  }
};

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
  const mangas = await getMangas();
  return { mangas };
}
