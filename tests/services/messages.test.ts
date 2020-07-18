import request from "supertest";

import app from "../../src/app";
import { messageService } from "../../src/services";
import { Message } from "../../src/models";

describe("MessageService", () => {
  it("should get messages", async (done) => {
    const messages = await messageService.getAll();

    expect(Array.isArray(messages)).toBe(true);
    expect(messages.length).toEqual(0);

    done();
  });

  it("should get messages by channel id", async (done) => {
    const messages = await messageService.getByChannelId("id");

    expect(Array.isArray(messages)).toBe(true);
    expect(messages.length).toEqual(0);

    done();
  });

  it("should get messages by key", async (done) => {
    const messages = await messageService.getByKey("key");

    expect(Array.isArray(messages)).toBe(true);
    expect(messages.length).toEqual(0);

    done();
  });

  it("should add a message", async (done) => {
    const newMessage: Message = {
      text: "Hello, World",
      date: Date.now(),
      user: {
        name: "King",
      },
      channel: {
        name: "General",
      },
    };
    const message = await messageService.add(newMessage);

    expect(typeof message === "object").toBe(true);
    expect(message.id).toEqual("0");
    expect(message.text).toEqual(newMessage.text);
    expect(message.date).toEqual(newMessage.date);
    expect(typeof message.user === "object").toBe(true);
    expect(message.user.name).toEqual(message.user.name);
    expect(typeof message.channel === "object").toBe(true);
    expect(message.channel.name).toEqual(message.channel.name);

    done();
  });
});
