import { User } from "../models";

class UserService {
  users: User[];

  constructor() {
    this.users = [];
  }

  async getAll() {
    return this.users;
  }

  async add(user: User) {
    user.id = this.users.length.toString();
    this.users.push(user);

    return user;
  }
}

export const userService = new UserService();
