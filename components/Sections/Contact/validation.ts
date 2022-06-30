import yup from "yup";

export const contactMeSchema = yup.object().shape({
  email: yup
    .string()
    .email("Input must be an email")
    .required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^(?:\+\d{1,2})?(?<=)\d+\s*$/, "Input must be a phone number"),
  message: yup.string().required("Message must not be empty"),
});
