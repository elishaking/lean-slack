import request from "supertest";

import app from "../../src/app";

describe("GET Endpoints", () => {
  it("should return all users", async (done) => {
    const { status, body } = await request(app).get("/users");
    expect(status).toEqual(200);
    expect(typeof body === "object").toBe(true);
    expect(body).toHaveProperty("success");
    expect(body).toHaveProperty("data");
    expect(body.success).toBe(true);
    expect(Array.isArray(body.data)).toBe(true);

    done();
  });
});

describe("POST Endpoints", () => {
  it("should add new user", async (done) => {
    const newUser = {
      name: "King E",
      date: Date.now(),
    };
    const { status, body } = await request(app).post("/users").send(newUser);
    expect(status).toEqual(201);
    expect(typeof body === "object").toBe(true);
    expect(body).toHaveProperty("success");
    expect(body.success).toBe(true);

    done();
  });
});
