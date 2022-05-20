import { NextApiRequest, NextApiResponse } from "next";
import { searchWholeVocabulary } from "../../lib/redis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const vocabularys = await searchWholeVocabulary();

  res.status(200).json({ vocabularys });
}
