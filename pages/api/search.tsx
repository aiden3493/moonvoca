import { NextApiRequest, NextApiResponse } from "next";
import { searchVocabulary } from "../../lib/redis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const q = req.query.q;
  const vocabularys = await searchVocabulary(q);
}
