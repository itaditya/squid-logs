import { v4 as uuid } from 'uuid';
import cookie from 'cookie';

export function createSessionCookie() {
  const sessionId = uuid();
  const sessionCookie = cookie.serialize('session_id', sessionId, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });

  return sessionCookie;
}

export function getSessionCookie(cookies = {}) {
  const sessionId = cookies['session_id'];

  if (!sessionId) {
    return null;
  }

  return sessionId;
}
