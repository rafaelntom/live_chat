import dotenv from "dotenv";
import authRouter from "./routes/auth.routes";
import express from "express";
import cookieparse from "cookie-parser";

dotenv.config();
const app = express();

app.use(cookieparse());
app.use(express.json());
app.use("/api/auth", authRouter);

export default app;
