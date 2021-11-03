import { VercelRequest, VercelResponse } from '@vercel/node';
import { getConnection } from '../../server/db';
import { getSessionCookie, clearSessionCookie } from '../../server/utils/sessionCookie';
import { deleteSession } from '../../server/queries/sessions';

const conn = getConnection();

async function logoutHandler(req: VercelRequest, res: VercelResponse) {
  const previousSessionId = getSessionCookie(req.cookies);
  await conn.execute(deleteSession, [previousSessionId]);

  const sessionCookie = clearSessionCookie();
  res.setHeader('Set-Cookie', sessionCookie);

  res.status(200).json({
    data: {
      message: 'Successfully logged out',
    },
  });
}

export default logoutHandler;
