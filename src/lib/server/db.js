import { Pool } from 'pg';
import { env } from '$env/dynamic/private';

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

export default db;