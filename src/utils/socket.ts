import http from "http";
import { Express } from "express";
import socketIO from "socket.io";

export class Socket {
  private socket?: socketIO.Socket = undefined;

  constructor(app: Express) {
    const server = http.createServer(app);
    const io = socketIO(server);

    io.on("connection", (socket) => {
      this.socket = socket;
    });
  }

  emit(event: string, data: any) {
    return this.socket?.emit(event, data) || false;
  }
}
