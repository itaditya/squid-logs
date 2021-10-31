import { VercelRequest, VercelResponse } from '@vercel/node';
import { PSDB } from 'planetscale-node';

const conn = new PSDB('main');

async function gameDetails(req: VercelRequest, res: VercelResponse) {
  const { method } = req;

  if (method !== 'GET') {
    res.status(404).json({
      error: {
        message: 'Action not found',
      },
    });
    return;
  }

  try {
    const [participants] = await conn.query(`select * from participants`, null);
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

export default gameDetails;
