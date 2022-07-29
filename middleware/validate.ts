import { ObjectSchema } from "yup";
import { ObjectShape } from "yup/lib/object";

export const validateJSON = async <TShema extends ObjectSchema<ObjectShape>>(
  schema: TShema,
  body: {}
) => {
  return await schema.validate(body, {
    abortEarly: false,
  });
};
