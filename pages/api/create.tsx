import { NextApiRequest, NextApiResponse } from "next";
import { createVocabulary } from "../../lib/redis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = await createVocabulary(req.body);
  res.status(200).json({ id });
}
