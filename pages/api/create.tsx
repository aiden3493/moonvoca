import { NextApiRequest, NextApiResponse } from "next";
import { deployVocabulay } from "../../lib/redis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = await deployVocabulay(req.body);
  res.status(200).json({ id });
}
