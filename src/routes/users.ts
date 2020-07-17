import { Router } from "express";

export const userRoute = Router();

userRoute.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    data: [],
  });
});
