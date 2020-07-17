import request from "supertest";
import app from "../../src/app";

describe("GET Endpoints", () => {
  it("should return root route", async (done) => {
    const { status, body } = await request(app).get("/");
    expect(status).toEqual(200);
    expect(typeof body === "object").toBe(true);
    expect(body).toHaveProperty("success");
    expect(body).toHaveProperty("message");
    expect(body.success).toBe(true);
    expect(body.message).toBe("Lean Slack API");

    done();
  });

  it("should return 404 route", async (done) => {
    const { status, body } = await request(app).get(
      "/does-not-exist-in-this-api"
    );
    expect(status).toEqual(404);
    expect(typeof body === "object").toBe(true);
    expect(body).toHaveProperty("success");
    expect(body).toHaveProperty("message");
    expect(body.success).toBe(false);
    expect(body.message).toBe("Route not found");

    done();
  });
});
