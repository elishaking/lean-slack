import { Router } from "express";
import { io } from "../app";
import { SocketEvents } from "../constants/socket.events";
import { User } from "../models";
import { userService } from "../services";

export const userRoute = Router();

userRoute
  .get("/", async (req, res) => {
    const users: User[] = await userService.getAll();

    res.status(200).json({
      success: true,
      payload: users,
    });
  })
  .post("/", async (req, res) => {
    const user: User = await userService.add(req.body);
    io.emit(SocketEvents.ADD_USER, user);

    res.status(201).json({
      success: true,
      payload: user,
    });
  });
