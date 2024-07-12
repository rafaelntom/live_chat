import dotenv from "dotenv";
import authRouter from "./routes/auth.routes";
import express from "express";
import cookieparse from "cookie-parser";
import messageRouter from "./routes/messages.routes";
import userRouter from "./routes/user.routes";
import cors from "cors";
import { User } from "./database/models/user.model";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieparse());
app.use(express.json());

app.use("/api/auth", authRouter);
// ! QUICK DELITION OF ALL USERS, REMOVE THIS LATER
app.use("/api/code_red", async (req, res) => {
  try {
    await User.deleteMany({});
    res.status(200).json({ message: "All users deleted successfully" });
  } catch (error) {
    console.error("Error deleting users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.use("/api/message", messageRouter);
app.use("/api/user", userRouter);

export default app;
