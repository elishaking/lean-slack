import { IUser, IChannel } from ".";

export interface Message {
  id?: string;
  key?: string;
  text: string;
  date: number;
  user: IUser;
  channel: IChannel | null;
}

export class MessageModel {
  constructor(
    text: string,
    date: number,
    user: IUser,
    channel: IChannel,
    id?: string
  ) {}

  save() {}
}
