import { Router } from "express";
import { io } from "../app";
import { SocketEvents } from "../constants/socket.events";
import { Message } from "../models";
import { messageService } from "../services";

export const messageRoute = Router();

messageRoute
  .get("/", async (req, res) => {
    const messages = await messageService.getAll();

    res.status(200).json({
      success: true,
      payload: messages,
    });
  })
  .post("/", async (req, res) => {
    const message: Message = await messageService.add(req.body);
    io.emit(SocketEvents.ADD_MESSAGE + message.key, message);

    res.status(201).json({
      success: true,
      payload: message,
    });
  });

messageRoute.get("/:channelId", async (req, res) => {
  const channelId = req.params.channelId;
  const messages = await messageService.getByChannelId(channelId);

  res.status(200).json({
    success: true,
    payload: messages,
  });
});

messageRoute.get("/users/:key", async (req, res) => {
  const key = req.params.key;
  const messages = await messageService.getByKey(key);

  res.status(200).json({
    success: true,
    payload: messages,
  });
});
