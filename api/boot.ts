import { VercelRequest, VercelResponse } from '@vercel/node';
import { getConnection } from '../server/db';
import { getSessionCookie } from '../server/utils/sessionCookie';
import { getParticipantsList } from '../server/queries/participants';
import { getSessionById } from '../server/queries/sessions';

const conn = getConnection();

async function getUserId(sessionId) {
  if (!sessionId) {
    return Promise.reject();
  }

  const [results] = await conn.execute(getSessionById, [sessionId]);

  if (results.length < 1) {
    return Promise.reject();
  }

  const userId = results[0].user_id;

  if (!userId) {
    return Promise.reject();
  }

  return userId;
}

async function bootHandler(req: VercelRequest, res: VercelResponse) {
  const { method, cookies } = req;

  if (method !== 'GET') {
    res.status(405).json({
      error: {
        message: 'Only GET is supported',
      },
    });
    return;
  }

  const sessionId = getSessionCookie(cookies);
  let userId = null;

  try {
    userId = await getUserId(sessionId);
  } catch (error) {
    res.status(401).json({
      error: {
        message: 'You need to login to access this API',
      },
    });
    return;
  }


  try {
    console.log(`userId`, userId); // aditodo remove this
    const [participants] = await conn.execute(getParticipantsList, []);
    res.status(200).json({
      data: {
        participants,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: {
        message: 'Something failed',
      },
    });
  }
}

export default bootHandler;
