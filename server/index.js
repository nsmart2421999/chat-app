const path = require("path");
const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT || 3000;

io.on("connection", (socket) => {
  console.log("connected...");
  socket.on("disconnect", () => {
    console.log("disconnected...");
  });

  socket.broadcast.emit("message", "Hello new client!");
});

http.listen(PORT, () => {
  console.log("listening on *:3000");
});
