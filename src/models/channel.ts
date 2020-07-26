import { Schema, Document, model } from "mongoose";

const ChannelSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export interface IChannel extends Document {
  id?: string;
  name: string;
  user: string;
}

export const ChannelModel = model<IChannel>("Channel", ChannelSchema);
