import http from "http";
//import { WebSocketServer } from "ws";
import SocketIO from "socket.io";
import express from "express";
import path from "path";

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

const handleListen = () => console.log(`Listening on "https://localhost:3000"`);
httpServer.listen(3010, handleListen);
