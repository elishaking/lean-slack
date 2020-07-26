import { userService } from "../../src/services";
import { IUser } from "../../src/models";

describe("UserService", () => {
  it("should get users", async (done) => {
    const users = await userService.getAll();

    expect(Array.isArray(users)).toBe(true);
    expect(users.length).toEqual(0);

    done();
  });

  it("should add a user", async (done) => {
    const newUser: IUser = {
      id: "0",
      name: "King E",
    };
    const user = await userService.add(newUser);

    expect(typeof user === "object").toBe(true);
    expect(user.id).toEqual("0");
    expect(user.name).toEqual(newUser.name);

    done();
  });
});
