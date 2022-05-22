import { NextApiRequest, NextApiResponse } from "next";
import { searchVocabulary } from "../../lib/redis";
import { withSentry } from "@sentry/nextjs";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const q = req.query.q;
  const vocabularys = await searchVocabulary(q);

  res.status(200).json({ vocabularys });
}

export default withSentry(handler);
