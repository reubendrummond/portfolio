// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { contactFormSchema } from "lib/schemas/contactForm";
import { validateJSON } from "middleware/validate";
import { ValidationError } from "yup";
import Mail from "lib/providers/SendGrid";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== "POST")
      res.status(405).json({ message: "Only POST requests accepted" });
    const formData = await validateJSON(contactFormSchema, req.body);

    if (process.env.NODE_ENV === "development") {
      await new Promise((res) => setTimeout(res, 3000));
      return res.status(200).json({
        data: "Email not sent in development",
      });
    }

    const resp = await Mail.send({
      to: "reubendrummond@gmail.com",
      from: "reubendrummond@gmail.com",
      html: `
      <p>Name: ${formData.name}</p>
      <p>Email: ${formData.email}</p>
      <p>Message: ${formData.message}</p>
      `,
      subject: `New message from ${formData.name}`,
    });
    return res.status(200).json({
      data: "Email successfully sent",
    });
  } catch (err) {
    console.log(err);
    if (err instanceof ValidationError)
      return res.status(400).json({ error: err.errors, message: err.message });

    return res.status(500).json({
      data: "error",
      message: err instanceof Error ? err.message : undefined,
    });
  }
};

export default handler;
