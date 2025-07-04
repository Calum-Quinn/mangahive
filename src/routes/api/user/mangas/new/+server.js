import { json, error } from '@sveltejs/kit';
import db from '$lib/server/db';
import { getUserBySessionId } from '$lib/server/db';

export async function POST({ request, cookies }) {
  const sessionId = cookies.get('session');
  if (!sessionId) throw error(401, 'Unauthorized');

  const user = await getUserBySessionId(sessionId);
  if (!user) throw error(401, 'Unauthorized');

  const formData = await request.formData();
  const seriesId = formData.get('seriesId');
  const volumeId = formData.get('volumeId');
  const photo = formData.get('photo');

  if (!seriesId || !volumeId) {
    throw error(400, 'Missing series or volume');
  }

  // Handle image upload (simplified: store in /static/uploads or use S3, etc.)
  let imageUrl = null;
  if (photo && photo.size > 0) {
    // You'd need to implement file storage here, example for local:
    // 1. Generate unique filename
    // 2. Save file to disk
    // 3. Store relative URL for DB

    // Pseudo code:
    // const buffer = await photo.arrayBuffer();
    // await fs.promises.writeFile(`static/uploads/${filename}`, Buffer.from(buffer));
    // imageUrl = `/uploads/${filename}`;

    // For now, we'll just reject or skip file saving
    imageUrl = '/default-user-manga.jpg'; // placeholder
  }

  // Insert into user_mangas table
  await db.query(
    `INSERT INTO user_mangas (user_id, volume_id, user_image_url) VALUES ($1, $2, $3)`,
    [user.id, volumeId, imageUrl]
  );

  // Return updated user mangas list
  const res = await db.query(
    `SELECT um.id, ms.title as series_title, ms.author as series_author, ms.year as series_year, mv.volume_number, um.user_image_url
     FROM user_mangas um
     JOIN manga_volumes mv ON um.volume_id = mv.id
     JOIN manga_series ms ON mv.series_id = ms.id
     WHERE um.user_id = $1 ORDER BY ms.title, mv.volume_number`,
    [user.id]
  );

  return json(res.rows);
}
