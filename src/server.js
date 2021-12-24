import http from "http";
//import { WebSocketServer } from "ws";
//import SocketIO from "socket.io";
import express from "express";
import path from "path";

var fs = require("fs");
var io = require("socket.io")(3000);
require("socket.io-stream")(io);
io.on("connection", function (socket) {
  io.emit(fs.createReadStream("file.jpg"));
});

const app = express();
//const server = require("http").Server(app);
const __dirname = path.resolve();

app.set("view engine", "pug");
app.set("views", __dirname + "/src/views");
app.use("/src/public", express.static(__dirname + "/src/public"));
app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const httpServer = http.createServer(app);
const wsServer = io(httpServer);

wsServer.on("connection", (socket) => {
  socket.on("join_room", (roomName, done) => {
    socket.join(roomName);
    done();
  });
});

const handleListen = () => console.log(`Listening on "https://localhost:3000"`);
httpServer.listen(3010, handleListen);
