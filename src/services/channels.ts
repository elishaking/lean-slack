import { IChannel, ChannelModel } from "../models";

class ChannelService {
  constructor() {}

  async getAll() {
    return ChannelModel.find();
  }

  async add(channel: IChannel) {
    return ChannelModel.create(channel);
  }
}

export const channelService = new ChannelService();
