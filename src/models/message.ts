import { IUser, Channel } from ".";

export interface Message {
  id?: string;
  key?: string;
  text: string;
  date: number;
  user: IUser;
  channel: Channel | null;
}

export class MessageModel {
  constructor(
    text: string,
    date: number,
    user: IUser,
    channel: Channel,
    id?: string
  ) {}

  save() {}
}
