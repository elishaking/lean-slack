import { User } from "./user";

export interface Message {
  id: string;
  text: string;
  date: number;
  user: User;
}

export class MessageModel {
  constructor(text: string, date: number, user: User, id?: string) {}

  save() {}
}
