import { PSDB } from 'planetscale-node';
import { dbBranch } from './config';

let sharedConn = null;

export function getConnection() {
  if (sharedConn) {
    return sharedConn;
  }

  const conn = new PSDB(dbBranch);
  sharedConn = conn;

  return sharedConn;
}
