import { VercelRequest, VercelResponse } from '@vercel/node';

function loginHandler(_req: VercelRequest, res: VercelResponse) {
  const date = new Date().toString();
  res.status(200).send(date);
}

export default loginHandler;
