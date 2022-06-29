import { contactFormSchema } from "@schemas/contactForm";
import { validateJSON } from "middleware/validate";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

const ValidatePost = async (req: NextRequest) => {
  //   const schema = contactFormSchema;
  //   if (["POST"].includes(req.method ?? "")) {
  //     try {
  //       console.log(req.body);
  //       req.body?.getReader()
  //       await schema.validate(req.body);
  //     } catch (err) {
  //       //   console.log(err);
  //       return new Response("Invalid", {
  //         status: 400,
  //       });
  //     }
  //     return NextResponse.next();
  //   }
  //   return new Response("Only post requests allowed", {
  //     status: 400,
  //   });
};

export default ValidatePost;
