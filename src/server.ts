import express, { Express } from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import config from "./config/server.config";

const app: Express = express();
const server = http.createServer(app);
const io: Server = new Server(server);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

server.listen(config.port, () => {
  console.log("Successfully Connected To Node Server");

  io.on("connection", (socket) => {
    console.log("Auth Value :" + socket.id);
    socket.on("sendNotification", (details) => {
      socket.broadcast.emit("sendNotification", details);
    });
  });
});

export { io };
