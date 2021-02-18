const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
  },
});
const mysql = require("mysql2");

const PORT = process.env.PORT || 3000;

io.on("connection", (socket) => {
  console.log(`${socket.id} connected`);

  socket.on("openConversation", ({ oldConversation, newConversation }) => {
    socket.leave(oldConversation);
    socket.join(newConversation);
  });

  socket.on("message", ({ conversationId, message }) => {
    io.to(conversationId).emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id} disconnected`);
  });
});

const dbConnection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "1234",
  database: "CHAT_APP",
});

dbConnection.query("SELECT * FROM USER", function (err, results, fields) {
  if (err) {
    throw err;
  }

  console.log(results);
});

http.listen(PORT, () => {
  console.log("listening on *:3000");
});
