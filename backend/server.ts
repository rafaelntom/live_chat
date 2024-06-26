import dotenv from "dotenv";
import express, { Request, Response } from "express";
import authRouter from "./routes/auth.routes";
import { mongooseDBConnection } from "./db/mongoDBconnection";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use("/api/auth", authRouter);

app.listen(port, async () => {
  await mongooseDBConnection().then(() => {
    console.log(` 🚀 Server is running on port ${port} 🚀`);
  });
});
