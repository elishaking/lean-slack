import { User, Channel } from ".";

export interface Message {
  id?: string;
  key?: string;
  text: string;
  date: number;
  user: User;
  channel: Channel;
}

export class MessageModel {
  constructor(
    text: string,
    date: number,
    user: User,
    channel: Channel,
    id?: string
  ) {}

  save() {}
}
