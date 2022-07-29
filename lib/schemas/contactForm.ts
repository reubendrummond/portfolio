import * as yup from "yup";

export const contactFormSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .test("len", "2 chars min", (name) => !!name && name.length >= 2),
  email: yup
    .string()
    .required("Email is required")
    .email("Input must be an email"),
  message: yup
    .string()
    .required("Message must not be empty")
    .test("len", "10 chars min", (name) => !!name && name.length >= 10),
});
