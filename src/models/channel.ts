export interface Channel {
  id?: string;
  name: string;
}

export class ChannelModel {
  constructor(public name: string, public id?: string) {}

  save() {}
}
