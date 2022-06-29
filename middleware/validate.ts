import { ObjectSchema } from "yup";
import { ObjectShape } from "yup/lib/object";

export const validateJSON = async (
  schema: ObjectSchema<ObjectShape>,
  body: {}
) => {
  return await schema.validate(body, {
    abortEarly: false,
  });
};
