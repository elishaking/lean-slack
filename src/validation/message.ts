import * as validator from "validator";

import { IMessage } from "../models";

const validate = validator.default;

export const validateMessage = (data: IMessage) => {
  const errors = {} as IMessage;

  const isTextEmpty = validate.isEmpty(data.text || "", {
    ignore_whitespace: true,
  });
  if (isTextEmpty) errors.text = "The message's text is required";

  const isUserEmpty = validate.isEmpty(data.user || "", {
    ignore_whitespace: true,
  });
  if (isUserEmpty) errors.user = "The message's user id is required";

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
