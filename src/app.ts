import express from "express";

import { userRoute, channelRoute, messageRoute } from "./routes";
import { Socket } from "./utils/socket";

// initialize app
const app = express();

// initialize socket connection
export const socket = new Socket(app);

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
  app.listen(3000, () => console.log("server running on port 3000"));

export default app;
