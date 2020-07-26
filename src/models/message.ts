import { Schema, Document, model } from "mongoose";

import { IUser, IChannel } from ".";

const MessageSchema = new Schema(
  {
    key: {
      type: String,
    },
    text: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    channel: {
      type: Schema.Types.ObjectId,
      ref: "Channel",
    },
  },
  { timestamps: true }
);

MessageSchema.index({
  updatedAt: 1,
});

export interface IMessage extends Document {
  id?: string;
  key?: string;
  text: string;
  date: number;
  user: string;
  channel: string;
}

export const MessageModel = model<IMessage>("Message", MessageSchema);
