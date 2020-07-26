import { IUser, UserModel } from "../models";

class UserService {
  constructor() {}

  async getAll() {
    return UserModel.find();
  }

  async add(user: IUser) {
    return UserModel.create(user);
  }
}

export const userService = new UserService();
