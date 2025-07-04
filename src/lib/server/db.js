import { Pool } from 'pg';
import { env } from '$env/dynamic/private';
import { get } from 'svelte/store';

const db = new Pool({
    connectionString: env.DATABASE_URL
});

/**
 * 
 * @param {*} username 
 * @returns {Promise<{id:number, password:string}>}
 */
export async function getUserByUsername(username) {
    const res = await db.query('SELECT * FROM users WHERE username = $1', [username]);
    return res.rows[0] || null;
}

export async function getUserBySessionId(sessionId) {
    const username = await db.query('SELECT username FROM sessions WHERE id = $1 AND expires_at > NOW()', [sessionId]);
    if (username.rows.length > 0) {
        return getUserByUsername(username.rows[0].username);
    }

    return null;
}

export async function getUserMangas(userId) {
    const res = await db.query('SELECT * FROM user_mangas WHERE user_id = $1', [userId]);
    return res.rows;
}

export async function addManga({ userId, title, author, year, imageUrl }) {
  await db.query(
    `INSERT INTO user_mangas (user_id, title, author, year, user_image_url) VALUES ($1, $2, $3, $4, $5)`,
    [userId, title, author, year, imageUrl]
  );
}


export default db;