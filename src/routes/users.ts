import { Router } from "express";
import { socket } from "../app";
import { SocketEvents } from "../constants/socket.events";
import { User } from "../models";

export const userRoute = Router();

userRoute
  .get("/", (req, res) => {
    res.status(200).json({
      success: true,
      data: [],
    });
  })
  .post("/", (req, res) => {
    const user: User = req.body;
    socket.emit(SocketEvents.ADD_USER, user);

    res.status(201).json({
      success: typeof user === "object",
    });
  });
