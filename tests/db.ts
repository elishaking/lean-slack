import { connect, disconnect, Types } from "mongoose";
import { envVariables } from "../src/config";

export const connectDb = () =>
  connect(envVariables.dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

export const disconnectDb = () => disconnect();

export const createObjectId = () => Types.ObjectId();
