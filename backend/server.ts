import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app";
import http from "http";
import { Server } from "socket.io";

dotenv.config();

type UserSocketMap = {
  [userId: string]: string;
};

export const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: "https://live-chat-wzeb.onrender.com",
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId = (receiverId: string) => {
  return userSocketMap[receiverId];
};

const userSocketMap: UserSocketMap = {};

io.on("connection", (socket) => {
  console.log("a user connected");

  const userId = socket.handshake.query.userId as string;

  if (userId) {
    userSocketMap[userId] = socket.id;
  }

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("user disconnected");
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export const mongooseDBConnection = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URI!);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error(`Error connecting to mongoDB: ${error}`);
    process.exit(1);
  }
};

server.listen(process.env.PORT || 5000, async () => {
  await mongooseDBConnection().then(() => {
    console.log(`Server is running on port: ${process.env.PORT || 5000} 🚀`);
  });
});
