import { Router } from "express";
import { io } from "../app";
import { SocketEvents } from "../constants/socket.events";
import { Channel } from "../models";

export const channelRoute = Router();

channelRoute
  .get("/", (req, res) => {
    res.status(200).json({
      success: true,
      payload: [],
    });
  })
  .post("/", (req, res) => {
    const channel: Channel = req.body;
    io.emit(SocketEvents.ADD_CHANNEL, channel);

    res.status(201).json({
      success: typeof channel === "object",
    });
  });
