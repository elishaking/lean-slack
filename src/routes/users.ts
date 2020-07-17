import { Router } from "express";
import { socket } from "../app";
import { SocketEvents } from "../constants/socket.events";

export const userRoute = Router();

userRoute
  .get("/", (req, res) => {
    res.status(200).json({
      success: true,
      data: [],
    });
  })
  .post("/", (req, res) => {
    const { body } = req;
    socket.emit(SocketEvents.ADD_USER, body);

    res.status(201).json({
      success: typeof body === "object",
    });
  });
