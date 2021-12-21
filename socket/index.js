import { Server } from "socket.io";

const PORT = process.env.PORT || 9000;

const io = new Server(PORT, {
  cors: {
    origin: "http://localhost:3000",
  },
});
const users = [];
const addUser = (userId, socketId) => {
  if (!users.some((user) => user.userId === userId)) {
    users.push({ userId, socketId });
  }
};
const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  console.log("User connected");
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const receiver = getUser(receiverId);
    console.log(text);
    if (receiver) {
      io.to(receiver.socketId).emit("getMessage", {
        senderId,
        text,
      });
    }
  });
  // socket.on("disconnect", () => {
});
