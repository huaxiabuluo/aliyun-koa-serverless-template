import type { NextApiRequest, NextApiResponse } from 'next';
// import { fileURLToPath } from 'node:url';
// import path from 'node:path';
import { rootPath } from 'lib/env';

export default async function hello(_req: NextApiRequest, res: NextApiResponse<any>) {
  res.status(200).json({ rootPath });
}
