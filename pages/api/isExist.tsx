import { NextApiRequest, NextApiResponse } from "next";
import { checkIsExist } from "../../lib/redis";
import { withSentry } from "@sentry/nextjs";

export const config = {
  api: {
    externalResolver: true,
  },
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const q = req.query.q;

  const isExist = await checkIsExist(q);

  res.status(200).json({ isExist });
}

export default withSentry(handler);
