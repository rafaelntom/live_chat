import express, { Router } from "express";
import { messageController } from "../controllers";
import { verifyToken } from "../middleware/verifyToken";

const messageRouter: Router = express.Router();

messageRouter.post(
  "/send/:receiver_user_id",
  verifyToken,
  messageController.send
);

messageRouter.get("/:receiver_user_id", verifyToken, messageController.read);

export default messageRouter;
