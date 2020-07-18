import * as http from "http";
import express from "express";
import socketIO from "socket.io";
import helmet from "helmet";
import cors from "cors";

import { userRoute, channelRoute, messageRoute } from "./routes";
import { Socket } from "./utils/socket";

// initialize express app
const app = express();

// initialize server
const server = http.createServer(app);

// add security
app.use(helmet());

// add cors
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// initialize socket connection
export const io = socketIO(server);

// parse body
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Lean Slack API",
  });
});

app.use("/users", userRoute);
app.use("/channels", channelRoute);
app.use("/messages", messageRoute);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// listen for requests
if (process.env.NODE_ENV !== "test")
  server.listen(7000, () => console.log("server running on port 7000"));

export default app;
