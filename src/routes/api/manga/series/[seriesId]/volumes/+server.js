import db from '$lib/server/db';

export async function GET({ params }) {
  const { seriesId } = params;
  const res = await db.query(
    'SELECT id, volume_number FROM manga_volumes WHERE series_id = $1 ORDER BY volume_number',
    [seriesId]
  );
  return new Response(JSON.stringify(res.rows), { status: 200 });
}
