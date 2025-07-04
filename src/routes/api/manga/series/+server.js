import db from '$lib/server/db';

export async function GET() {
  const res = await db.query('SELECT id, title, year FROM manga_series ORDER BY title');
  return new Response(JSON.stringify(res.rows), { status: 200 });
}
