import { VercelRequest, VercelResponse } from '@vercel/node';
import { getConnection } from '../../server/db';
import { getParticipantById } from '../../server/queries/participants';

const conn = getConnection();

async function participantByIdHandler(req: VercelRequest, res: VercelResponse) {
  const { method, query } = req;

  if (method !== 'GET') {
    res.status(405).json({
      error: {
        message: 'Only GET is supported',
      },
    });
    return;
  }

  const participantId = query.id;

  if (!participantId) {
    res.status(400).json({
      error: {
        message: 'Please provide id query param',
      },
    });
    return;
  }

  try {
    const [results] = await conn.execute(getParticipantById, [participantId]);
    const participant = results[0];
    res.status(200).json({
      data: participant,
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

export default participantByIdHandler;
