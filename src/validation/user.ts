import * as validator from "validator";

import { IUser } from "../models";

const validate = validator.default;

export const validateUser = (data: IUser) => {
  const errors = {} as IUser;

  const isNameEmpty = validate.isEmpty(data.name || "", {
    ignore_whitespace: true,
  });
  if (isNameEmpty) errors.name = "Your name is required";

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
