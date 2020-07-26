import * as validator from "validator";

import { IChannel } from "../models";

const validate = validator.default;

export const validateChannel = (data: IChannel) => {
  const errors = {} as IChannel;

  const isNameEmpty = validate.isEmpty(data.name || "", {
    ignore_whitespace: true,
  });
  if (isNameEmpty) errors.name = "The channel's name is required";

  const isUserEmpty = validate.isEmpty(data.user || "", {
    ignore_whitespace: true,
  });
  if (isUserEmpty) errors.user = "The channel's user id is required";

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
