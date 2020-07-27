import request from "supertest";

import app from "../../src/app";
import * as db from "../db";
import { messageService } from "../../src/services";

describe("GET Endpoints", () => {
  it("should return all messages", async (done) => {
    const { status, body } = await request(app).get("/messages");
    expect(status).toEqual(200);
    expect(typeof body === "object").toBe(true);
    expect(body).toHaveProperty("success");
    expect(body).toHaveProperty("payload");
    expect(body.success).toBe(true);
    expect(Array.isArray(body.payload)).toBe(true);

    done();
  });

  it("should return all messages for a channel", async (done) => {
    const newMessage1: any = {
      text: "Hello, World",
      user: db.createObjectId(),
      channel: db.createObjectId().toHexString(),
    };
    await messageService.add(newMessage1);

    const { status, body } = await request(app).get(
      `/messages/${newMessage1.channel}`
    );
    expect(status).toEqual(200);
    expect(typeof body === "object").toBe(true);
    expect(body).toHaveProperty("success");
    expect(body).toHaveProperty("payload");
    expect(body.success).toBe(true);
    expect(Array.isArray(body.payload)).toBe(true);
    expect(body.payload.length).toEqual(1);

    done();
  });

  it("should return all messages for a key", async (done) => {
    const newMessage1: any = {
      text: "Hello, World",
      user: db.createObjectId(),
      key: "key",
    };
    await messageService.add(newMessage1);

    const { status, body } = await request(app).get(
      `/messages/users/${newMessage1.key}`
    );
    expect(status).toEqual(200);
    expect(typeof body === "object").toBe(true);
    expect(body).toHaveProperty("success");
    expect(body).toHaveProperty("payload");
    expect(body.success).toBe(true);
    expect(Array.isArray(body.payload)).toBe(true);
    expect(body.payload.length).toEqual(1);

    done();
  });
});

describe("POST Endpoints", () => {
  afterAll((done) => {
    messageService
      .clear()
      .then(() => db.disconnectDb())
      .then(() => done())
      .catch((err) => done(err));
  });

  const newMessage1: any = {
    text: "Hello, World",
    user: db.createObjectId(),
    channel: db.createObjectId(),
  };

  it("should add new message", async (done) => {
    const { status, body } = await request(app)
      .post("/messages")
      .send(newMessage1);

    expect(status).toEqual(201);
    expect(typeof body === "object").toBe(true);
    expect(body).toHaveProperty("success");
    expect(body.success).toBe(true);
    expect(body).toHaveProperty("payload");
    expect(typeof body.payload === "object").toBe(true);
    expect(body.payload.text).toEqual(newMessage1.text);

    done();
  });
});
