import { VercelRequest, VercelResponse } from '@vercel/node';
import { PSDB } from 'planetscale-node';
import { getParticipantById } from '../../queries/participants';

const conn = new PSDB('main');

async function participantByIdHandler(req: VercelRequest, res: VercelResponse) {
  const { method, query } = req;

  const participantId = query.id;

  if (method !== 'GET' || !participantId) {
    res.status(404).json({
      error: {
        message: 'Action not found',
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
