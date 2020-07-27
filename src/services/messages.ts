import { IMessage, MessageModel } from "../models";

class MessageService {
  constructor() {}

  async getAll() {
    return MessageModel.find().lean();
  }

  async getByChannelId(channelId: string) {
    return MessageModel.find({ channel: channelId }).lean();
  }

  async getByKey(key: string) {
    return MessageModel.find({ key }).lean();
  }

  async add(message: IMessage) {
    return MessageModel.create(message);
  }

  async clear() {
    return MessageModel.remove({});
  }
}

export const messageService = new MessageService();
