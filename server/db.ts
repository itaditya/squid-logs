import { createPool } from 'mysql2';
import type { Pool } from 'mysql2';

let sharedPool = null;

export function getConnection(): Pool {
  if (sharedPool) {
    return sharedPool;
  }

  const pool = createPool({
    host: process.env.PLANETSCALE_DB_HOST,
    user: process.env.PLANETSCALE_DB_USERNAME,
    password: process.env.PLANETSCALE_DB_PASSWORD,
    database: process.env.PLANETSCALE_DB,
    ssl: {
      rejectUnauthorized: true,
    },
  });

  const promisePool = pool.promise();
  sharedPool = promisePool;

  return sharedPool;
}
