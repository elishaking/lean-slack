import { Server } from "http";
import socketIO from "socket.io";

export class Socket {
  private socket?: socketIO.Socket = undefined;

  constructor(server: Server) {
    const io = socketIO(server);

    io.on("connection", (socket) => {
      this.socket = socket;
      console.log("new connection");
    });
  }

  emit(event: string, payload: any) {
    return this.socket?.broadcast.emit(event, data) || false;
  }
}
