import * as dotenv from "dotenv";

dotenv.config();

type NodeEnv = "development" | "production" | "test";

const nodeEnv = process.env.NODE_ENV as NodeEnv;

const getDBUrl = () => {
  if (nodeEnv === "development") return process.env.DB_URI_DEV;
  if (nodeEnv === "test") return process.env.DB_URI_TEST;

  return process.env.DB_URI;
};

const getFrontendUrl = () => {
  if (nodeEnv === "production") return process.env.FRONTEND_URL;

  return `http://localhost:${process.env.PORT}`;
};

const defaultEnvVariables = {
  nodeEnv: "development",
  port: 7000,
  dbUri: "mongodb://localhost:27017/leanslack",
  frontendUrl: "http://localhost:7000",
};

export const envVariables = Object.assign(defaultEnvVariables, {
  nodeEnv,
  port: +(process.env.PORT || 7000),
  dbUri: getDBUrl(),
  frontendUrl: getFrontendUrl(),
});
