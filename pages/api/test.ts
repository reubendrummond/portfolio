// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

/*
  supabase
  heroku
  upstash
  vercel
  prisma
  framer motion
*/

interface Data {
  name: string;
  age: number;
}

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  return res.status(200).json({
    name: "test name",
    age: 123,
  });
};

export default handler;
