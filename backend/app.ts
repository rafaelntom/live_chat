import dotenv from "dotenv";
import authRouter from "./routes/auth.routes";
import express from "express";
import cookieparse from "cookie-parser";
import messageRouter from "./routes/messages.routes";
import userRouter from "./routes/user.routes";
import cors from "cors";

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
app.use("/api/message", messageRouter);
app.use("/api/user", userRouter);

export default app;
