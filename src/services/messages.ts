import { Message } from "../models";

class MessageService {
  messages: Message[];

  constructor() {
    this.messages = [];
  }

  async getAll() {
    return this.messages;
  }

  async getByChannelId(channelId: string) {
    return this.messages.filter((message) => message.channel.id === channelId);
  }

  async getByKey(key: string) {
    return this.messages.filter((message) => message.key === key);
  }

  async add(message: Message) {
    message.id = this.messages.length.toString();
    this.messages.push(message);

    return message;
  }
}

export const messageService = new MessageService();
