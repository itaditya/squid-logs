import { VercelRequest, VercelResponse } from '@vercel/node';
import { clearSessionCookie } from '../../server/utils/sessionCookie';

function logoutHandler(req: VercelRequest, res: VercelResponse) {
  const sessionCookie = clearSessionCookie();
  res.setHeader('Set-Cookie', sessionCookie);
  res.status(200).json({
    data: {
      message: 'Successfully logged out',
    },
  });
}

export default logoutHandler;
