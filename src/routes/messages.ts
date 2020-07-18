import { Router } from "express";
import { socket } from "../app";
import { SocketEvents } from "../constants/socket.events";
import { Message } from "../models";

export const messageRoute = Router();

messageRoute
  .get("/", (req, res) => {
    res.status(200).json({
      success: true,
      data: [],
    });
  })
  .post("/", (req, res) => {
    const message: Message = req.body;
    socket.emit(SocketEvents.ADD_MESSAGE, message);

    res.status(201).json({
      success: typeof message === "object",
    });
  });
