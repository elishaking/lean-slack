import { Router } from "express";
import { io } from "../app";
import { SocketEvents } from "../constants/socket.events";
import { IUser } from "../models";
import { userService } from "../services";
import { validateUser } from "../validation";
import { logError } from "../utils/error";

export const userRoute = Router();

userRoute
  .get("/", async (req, res) => {
    const users = await userService.getAll();

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

    try {
      const user: IUser = await userService.add(req.body);
      io.emit(SocketEvents.ADD_USER, user);

      res.status(201).json({
        success: true,
        payload: user,
      });
    } catch (err) {
      logError(err);

      res.status(500).json({
        success: false,
        payload: "Could not add user, please try again",
      });
    }
  });
