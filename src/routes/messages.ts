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
      data: messages,
    });
  })
  .post("/", async (req, res) => {
    const message: Message = await messageService.add(req.body);
    io.emit(SocketEvents.ADD_MESSAGE + message.channel.name, message);

    res.status(201).json({
      success: true,
      data: message,
    });
  });
