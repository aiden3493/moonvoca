import { NextApiRequest, NextApiResponse } from "next";
import { createIndex } from "../../lib/redis";
import { withSentry } from "@sentry/nextjs";

export const config = {
  api: {
    externalResolver: true,
  },
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await createIndex();
  res.status(200).send("ok");
}

export default withSentry(handler);
