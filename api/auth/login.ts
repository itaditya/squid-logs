import { VercelRequest, VercelResponse } from '@vercel/node';
import { getSessionCookie, createSessionCookie } from '../../server/utils/sessionCookie';

function loginHandler(req: VercelRequest, res: VercelResponse) {
  const previousSessionId = getSessionCookie(req.cookies);

  if (previousSessionId) {
    res.status(400).json({
      error: {
        message: 'Already logged in',
      },
    });
    return;
  }

  const sessionCookie = createSessionCookie();
  res.setHeader('Set-Cookie', sessionCookie);
  res.status(200).json({
    data: {
      message: 'Successfully authenticated',
    },
  });
}

export default loginHandler;
