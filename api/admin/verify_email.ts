import { VercelRequest, VercelResponse } from '@vercel/node';
import { getConnection } from '../../server/db';
import { updateEmailVerifyStatus } from '../../server/queries/organisers';

const conn = getConnection();

async function verifyEmailHandler(req: VercelRequest, res: VercelResponse) {
  const { method, body } = req;

  if (method !== 'PATCH') {
    res.status(405).json({
      error: {
        message: 'Only PATCH is supported',
      },
    });
    return;
  }

  const { organiserId, emailVerified } = body.data || {};

  if (!organiserId || typeof emailVerified !== 'boolean') {
    res.status(400).json({
      error: {
        message: 'Please provide organiser_id & email_verified',
      },
    });
    return;
  }

  try {
    await conn.execute(updateEmailVerifyStatus, [emailVerified, organiserId]);
    res.status(200).json({
      data: {
        message: 'email_verification value has been updated',
        emailVerified: emailVerified,
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

export default verifyEmailHandler;
