import express from "express";

import { userRoute } from "./routes/users";

// initialize app
const app = express();

// parse body
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Lean Slack API",
  });
});

app.use("/users", userRoute);

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
