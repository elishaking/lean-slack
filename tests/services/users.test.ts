import * as db from "./db";
import { userService } from "../../src/services";

describe("UserService", () => {
  beforeAll((done) => {
    db.connectDb()
      .then(() => {
        done();
      })
      .catch((err) => done(err));
  });

  afterAll((done) => {
    userService
      .clear()
      .then(() => db.disconnectDb())
      .then(() => {
        done();
      })
      .catch((err) => done(err));
  });

  const newUser1: any = {
    name: "King",
  };

  it("should add a user", async (done) => {
    const user = await userService.add(newUser1);

    expect(typeof user === "object").toBe(true);
    expect(user).toHaveProperty("id");
    expect(typeof user.id === "string").toBe(true);
    expect(user).toHaveProperty("name");
    expect(user.name).toEqual(newUser1.name);

    done();
  });

  it("should get users", async (done) => {
    const users = await userService.getAll();

    expect(Array.isArray(users)).toBe(true);
    expect(users.length).toEqual(1);

    done();
  });
});
