import * as db from "./db";
import { messageService } from "../../src/services";

describe("MessageService", () => {
  beforeAll((done) => {
    db.connectDb()
      .then((db) => {
        done();
      })
      .catch((err) => done(err));
  });

  afterAll((done) => {
    messageService
      .clear()
      .then(() => db.disconnectDb())
      .then(() => {
        done();
      })
      .catch((err) => done(err));
  });

  const newMessage1: any = {
    text: "Hello, World",
    user: db.createObjectId(),
    channel: db.createObjectId(),
  };

  const newMessage2: any = {
    text: "Hello, World",
    user: db.createObjectId(),
    key: "key",
  };

  it("should add a message", async (done) => {
    const message = await messageService.add(newMessage1);

    expect(typeof message === "object").toBe(true);
    expect(message).toHaveProperty("id");
    expect(typeof message.id === "string").toBe(true);
    expect(message).toHaveProperty("text");
    expect(message.text).toEqual(newMessage1.text);
    expect(message).toHaveProperty("user");
    expect(message.user).toEqual(newMessage1.user);
    expect(message).toHaveProperty("channel");
    expect(message.channel).toEqual(newMessage1.channel);

    done();
  });

  it("should get messages", async (done) => {
    const messages = await messageService.getAll();

    expect(Array.isArray(messages)).toBe(true);
    expect(messages.length).toEqual(1);

    done();
  });

  it("should get messages by channel id", async (done) => {
    const messages = await messageService.getByChannelId(newMessage1.channel);

    expect(Array.isArray(messages)).toBe(true);
    expect(messages.length).toEqual(1);

    done();
  });

  it("should get messages by key", async (done) => {
    await messageService.add(newMessage2);
    const messages = await messageService.getByKey(newMessage2.key);

    expect(Array.isArray(messages)).toBe(true);
    expect(messages.length).toEqual(1);

    done();
  });
});
