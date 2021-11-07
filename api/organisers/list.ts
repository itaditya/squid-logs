import { VercelRequest, VercelResponse } from '@vercel/node';
import { getConnection } from '../../server/db';
import { getFormattedOrganiser } from '../../server/utils/formatDbData';
import { getOrganisersList } from '../../server/queries/organisers';
import { GetListOrganisers } from '../../apiTypes/organisers/list';

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
    const organisersList = await getOrganisersList(conn);
    const organisers = organisersList.map(getFormattedOrganiser);
    const responseJson: GetListOrganisers = {
      data: organisers,
    }
    res.status(200).json(responseJson);
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
