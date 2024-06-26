import dotenv from "dotenv";
import express from "express";
import authRouter from "./routes/auth.routes";
import { validateRequestBody } from "./middleware/validateRequestBody.middleware";
import { ZodUserSchema } from "./schemas/auth.schema";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/auth", validateRequestBody(ZodUserSchema), authRouter);

export default app;
