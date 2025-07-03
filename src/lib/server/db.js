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

export default db;