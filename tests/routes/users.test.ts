import request from "supertest";

import app from "../../src/app";
import { userService } from "../../src/services";

describe("GET Endpoints", () => {
  it("should return all users", async (done) => {
    const { status, body } = await request(app).get("/users");
    expect(status).toEqual(200);
    expect(typeof body === "object").toBe(true);
    expect(body).toHaveProperty("success");
    expect(body).toHaveProperty("payload");
    expect(body.success).toBe(true);
    expect(Array.isArray(body.payload)).toBe(true);

    done();
  });
});

const newUser1: any = {
  name: "King",
};

describe("POST Endpoints", () => {
  afterAll((done) => {
    userService
      .clear()
      .then(() => done())
      .catch((err) => done(err));
  });

  it("should add new user", async (done) => {
    const { status, body } = await request(app).post("/users").send(newUser1);

    expect(status).toEqual(201);
    expect(typeof body === "object").toBe(true);
    expect(body).toHaveProperty("success");
    expect(body.success).toBe(true);
    expect(body).toHaveProperty("payload");
    expect(typeof body.payload === "object").toBe(true);
    expect(body.payload.name).toEqual(newUser1.name);

    done();
  });
});
