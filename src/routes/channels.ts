import { Router } from "express";

import { io } from "../app";
import { SocketEvents } from "../constants/socket.events";
import { IChannel } from "../models";
import { channelService } from "../services/channels";

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
    // const { isValid, errors } = validateChannel(req.body);
    // if (!isValid)
    //   return res.status(400).json({
    //     success: true,
    //     payload: errors,
    //   });

    const channel: IChannel = await channelService.add(req.body);
    io.emit(SocketEvents.ADD_CHANNEL, channel);

    res.status(201).json({
      success: true,
      payload: channel,
    });
  });
