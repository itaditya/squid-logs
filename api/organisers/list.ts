import { VercelRequest, VercelResponse } from '@vercel/node';
import { getConnection } from '../../server/db';
import { getFormattedOrganiser } from '../../server/utils/formatDbData';
import { getAllOrganisers } from '../../server/queries/organisers';

const conn = getConnection();

async function listOrganisersHandler(req: VercelRequest, res: VercelResponse) {
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
    const [results] = await conn.execute(getAllOrganisers);
    const organisers = results.map(getFormattedOrganiser);
    res.status(200).json({
      data: organisers,
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

export default listOrganisersHandler;
