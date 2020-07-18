import { Message } from "../models";

class MessageService {
  messages: Message[];

  constructor() {
    this.messages = [];
  }

  async getAll() {
    return this.messages;
  }

  async add(message: Message) {
    message.id = this.messages.length.toString();
    this.messages.push(message);

    return message;
  }
}

export const messageService = new MessageService();
