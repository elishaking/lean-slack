import { IUser, UserModel } from "../models";

class UserService {
  constructor() {}

  async getAll() {
    return UserModel.find().lean();
  }

  async add(user: IUser) {
    return UserModel.create(user);
  }

  async clear() {
    return UserModel.remove({});
  }
}

export const userService = new UserService();
