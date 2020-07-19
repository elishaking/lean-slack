import request from "supertest";

import app from "../../src/app";
import { User } from "../../src/models";

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

describe("POST Endpoints", () => {
  it("should add new user", async (done) => {
    const newUser: User = {
      id: "0",
      name: "King E",
    };
    const { status, body } = await request(app).post("/users").send(newUser);
    expect(status).toEqual(201);
    expect(typeof body === "object").toBe(true);
    expect(body).toHaveProperty("success");
    expect(body.success).toBe(true);
    expect(body).toHaveProperty("payload");
    expect(typeof body.payload === "object").toBe(true);
    expect(body.payload.id).toEqual(newUser.id);
    expect(body.payload.name).toEqual(newUser.name);

    done();
  });
});
