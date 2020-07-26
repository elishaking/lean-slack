import { Router } from "express";

import { io } from "../app";
import { SocketEvents } from "../constants/socket.events";
import { IChannel } from "../models";
import { channelService } from "../services/channels";
import { validateChannel } from "../validation";

export const channelRoute = Router();

channelRoute
  .get("/", async (req, res) => {
    const channels: IChannel[] = await channelService.getAll();

    res.status(200).json({
      success: true,
      payload: channels,
    });
  })
  .post("/", async (req, res) => {
    const { isValid, errors } = validateChannel(req.body);
    if (!isValid)
      return res.status(400).json({
        success: true,
        payload: errors,
      });

    try {
      const channel: IChannel = await channelService.add(req.body);
      io.emit(SocketEvents.ADD_CHANNEL, channel);

      res.status(201).json({
        success: true,
        payload: channel,
      });
    } catch (err) {
      if (err.name === "MongoError" && err.code === 11000)
        return res.status(400).json({
          success: false,
          payload: {
            name: "A channel with this name already exists",
          },
        });

      res.status(500).json({
        success: false,
        payload: "Could not add channel, please try again",
      });
    }
  });
