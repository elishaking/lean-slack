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
