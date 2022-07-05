// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { contactFormSchema } from "lib/schemas/contactForm";
import { validateJSON } from "middleware/validate";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    req.body = await validateJSON(contactFormSchema, req.body);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
  return res.status(200).json(req.body);
};

export default handler;
