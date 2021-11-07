import { VercelRequest, VercelResponse } from '@vercel/node';
import { getConnection } from '../server/db';
import { getFormattedOrganiser } from '../server/utils/formatDbData';
import { getSessionCookie } from '../server/utils/sessionCookie';
import { getParticipantsList } from '../server/queries/participants';
import { getOrganiserById } from '../server/queries/organisers';
import { getSessionById } from '../server/queries/sessions';

const conn = getConnection();

async function getUserId(sessionId): Promise<number> {
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

async function getCurrentOrganiserData(organiserId: number) {
  const storedOrganiser = await getOrganiserById(conn, { organiserId });
  const formattedOrganiser = getFormattedOrganiser(storedOrganiser);

  return formattedOrganiser;
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
  let organiserId: unknown = null;

  try {
    organiserId = await getUserId(sessionId);
  } catch (error) {
    res.status(401).json({
      error: {
        message: 'You need to login to access this API',
      },
    });
    return;
  }

  try {
    // TODO: logically this condition is not required since the previous catch would handle the case, figure out clean approach.
    if (typeof organiserId !== 'number') {
      return;
    }
    const [participants, organiser] = await Promise.all([
      getParticipantsList(conn),
      getCurrentOrganiserData(organiserId),
    ]);
    res.status(200).json({
      data: {
        participants,
        current_organiser: organiser,
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
