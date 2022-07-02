import * as yup from "yup";

export const contactFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Input must be an email"),
  phoneNumber: yup
    .string()
    .matches(/^(?:\+\d{1,2})?\d+(?=\s+$|$)/, "Input must be a phone number"),
  message: yup.string().required("Message must not be empty"),
});
