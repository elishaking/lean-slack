import request from "supertest";

import app from "../../src/app";
import * as db from "../db";
import { userService } from "../../src/services";

describe("User Route", () => {
  afterAll((done) => {
    userService
      .clear()
      .then(() => db.disconnectDb())
      .then(() => done())
      .catch((err) => done(err));
  });

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
});
