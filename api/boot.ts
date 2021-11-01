import { VercelRequest, VercelResponse } from '@vercel/node';
import { getConnection } from '../server/db';
import { getParticipantsList } from '../server/queries/participants';

const conn = getConnection();

async function bootHandler(req: VercelRequest, res: VercelResponse) {
  const { method } = req;

  if (method !== 'GET') {
    res.status(405).json({
      error: {
        message: 'Only GET is supported',
      },
    });
    return;
  }

  try {
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
