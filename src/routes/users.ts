import { Router } from "express";
import { io } from "../app";
import { SocketEvents } from "../constants/socket.events";
import { IUser } from "../models";
import { userService } from "../services";
import { validateUser } from "../validation";

export const userRoute = Router();

userRoute
  .get("/", async (req, res) => {
    const users: IUser[] = await userService.getAll();

    res.status(200).json({
      success: true,
      payload: users,
    });
  })
  .post("/", async (req, res) => {
    const { isValid, errors } = validateUser(req.body);
    if (!isValid)
      return res.status(400).json({
        success: true,
        payload: errors,
      });

    const user: IUser = await userService.add(req.body);
    io.emit(SocketEvents.ADD_USER, user);

    res.status(201).json({
      success: true,
      payload: user,
    });
  });
