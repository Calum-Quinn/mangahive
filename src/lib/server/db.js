import { Pool } from 'pg';
import { env } from '$env/dynamic/private';

const db = new Pool({
    connectionString: env.DATABASE_URL
});

export default db;