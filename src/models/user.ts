export interface User {
  id: string;
  name: string;
}

export class UserModel {
  constructor(public name: string, public id?: string) {}

  save() {}
}
