import { Server } from "socket.io";

const PORT = 9000;

const io = new Server(PORT, {
  cors: {
    origin: "http://localhost:3000",
  },
});
const users = [];
const addUser = (userId, socketId) => {
  if (!users.some((user) => user.userId === userId)) {
    users.push({userId, socketId });
  }
};
io.on("connection", (socket) => {
  console.log("User connected");
  socket.on("addUser", (userId) => {
      addUser(userId, socket.id);
      io.emit('getUsers',users);
  });
});
