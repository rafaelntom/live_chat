import dotenv from "dotenv";
import express from "express";
import authRouter from "./routes/auth.routes";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/auth", authRouter);

export default app;
