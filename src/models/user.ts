import { Schema, Document, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export interface IUser extends Document {
  id?: string;
  name: string;
}

export const UserModel = model<IUser>("User", UserSchema);
