import { createHash } from 'crypto';
import { VercelRequest, VercelResponse } from '@vercel/node';
import { getConnection } from '../../server/db';
import {
  getSessionCookie,
  createSessionId,
  createSessionCookie,
} from '../../server/utils/sessionCookie';
import { createSession } from '../../server/queries/sessions';
import { getOrganiserByEmail } from '../../server/queries/organisers';

const conn = getConnection();

function getLoginData(data) {
  if (!data) {
    return null;
  }

  const { email, password, phone_code, phone_number, verification_code } = data;

  if (email && password) {
    return {
      type: 'email',
      credentials: {
        email,
        password,
      },
    };
  }

  if (phone_code && phone_number && verification_code) {
    return {
      type: 'phone',
      credentials: {
        phone_code,
        phone_number,
        verification_code,
      },
    };
  }

  return null;
}

function getEncryptedPassword(rawPassword) {
  // !Note- probably insecure way to encrypt, don't use in production app
  const hash = createHash('sha256');
  hash.update(rawPassword);
  const result = hash.digest('hex');
  return result;
}

async function getUserId(loginData) {
  const { type, credentials } = loginData;

  if (type === 'email') {
    const [results] = await conn.execute(getOrganiserByEmail, [credentials.email]);

    if (results.length < 1) {
      return Promise.reject({
        message: 'User not found',
      });
    }

    const { id, password } = results[0];
    const encryptedPassword = getEncryptedPassword(credentials.password);

    if (encryptedPassword === password) {
      return id;
    }

    return Promise.reject({
      message: 'Incorrect login credentials',
    });
  }

  return Promise.reject({
    message: 'Unsupported login type',
  });
}

async function loginHandler(req: VercelRequest, res: VercelResponse) {
  const { method, body } = req;

  if (method !== 'POST') {
    res.status(405).json({
      error: {
        message: 'Only POST is supported',
      },
    });
    return;
  }

  const loginData = getLoginData(body?.data);
  if (!loginData) {
    res.status(405).json({
      error: {
        message: 'Either provide email + password or phone + verification_code',
      },
    });
    return;
  }

  const previousSessionId = getSessionCookie(req.cookies);

  if (previousSessionId) {
    // TODO- Handle edge case where user has sessionId in cookie but its absent in session store.
    res.status(400).json({
      error: {
        message: 'Already logged in',
      },
    });
    return;
  }

  let userId = null;
  try {
    userId = await getUserId(loginData);
  } catch (error) {
    const message = error.message || 'Failed to find user for these credentials';
    res.status(401).json({
      error: {
        message,
      },
    });
    return;
  }

  try {
    const sessionId = createSessionId();

    await conn.execute(createSession, [sessionId, userId]);

    const sessionCookie = createSessionCookie(sessionId);
    res.setHeader('Set-Cookie', sessionCookie);

    res.status(200).json({
      data: {
        message: 'Successfully authenticated',
      },
    });
  } catch (error) {
    res.status(500).json({
      error: {
        message: 'Something failed',
      },
    });
  }
}

export default loginHandler;
