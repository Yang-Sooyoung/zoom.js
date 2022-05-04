import http from "http";
//import { WebSocketServer } from "ws";
import SocketIO from "socket.io";
import express from "express";
import path from "path";

//var fs = require("fs");
//var SocketIO = require("socket.io")(3010);
// require("socket.io-stream")(io);
// io.on("connection", function (socket) {
//   io.emit(fs.createReadStream("file.jpg"));
// });
const app = express();
//const server = require("http").Server(app);
const __dirname = path.resolve();

app.set("view engine", "pug");
app.set("views", __dirname + "/src/views");
app.use("/src/public", express.static(__dirname + "/src/public"));
app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer);
//const io = SocketIO(wsServer); //eslint-disable-line

wsServer.on("connection", (socket) => {
  socket.on("join_room", (roomName) => {
    socket.join(roomName);
    socket.to(roomName).emit("welcome");
  });
  socket.on("offer", (offer, roomName) => {
    socket.to(roomName).emit("offer", offer);
  });
  socket.on("answer", (answer, roomName) => {
    socket.to(roomName).emit("answer", answer);
  });
  socket.on("ice", (ice, roomName) => {
    socket.to(roomName).emit("ice", ice);
  });
});

const handleListen = () => console.log(`Listening on "https://localhost:3000"`);
httpServer.listen(3000, handleListen);
