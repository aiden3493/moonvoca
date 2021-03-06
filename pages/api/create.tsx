import { NextApiRequest, NextApiResponse } from "next";
import { createVocabulary } from "../../lib/redis";
import { withSentry } from "@sentry/nextjs";

export const config = {
  api: {
    externalResolver: true,
  },
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = await createVocabulary(req.body);
  res.status(200).json({ id });
}

export default withSentry(handler);
