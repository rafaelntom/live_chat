import express, { Router } from "express";
import { messageController } from "../controllers";
import { verifyToken } from "../middleware/verifyToken";

const messageRouter: Router = express.Router();

messageRouter.post(
  "/send/:user_id",
  verifyToken,
  messageController.sendMessage
);

export default messageRouter;
