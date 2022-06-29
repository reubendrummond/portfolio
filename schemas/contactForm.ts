import { object, string, InferType, number } from "yup";

export const contactFormSchema = object()
  .shape({
    firstName: string()
      .matches(/^[aA-zZ]+$/, "First name must not have a number")
      .min(3)
      .max(32)
      .required("First name is required"),
    lastName: string()
      .matches(/^[aA-zZ]+$/, "Last name must not have a number")
      .min(3)
      .max(32)
      .required("Last name is required"),
    age: number().integer().positive().required("Age is required"),
    email: string().email().required("Email is required"),
    message: string().max(1024),
  })
  .strict();

export type ContactForm = InferType<typeof contactFormSchema>;
