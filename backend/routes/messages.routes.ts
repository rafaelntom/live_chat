import express, { Router } from "express";
import { messageController } from "../controllers";

const messageRouter: Router = express.Router();

messageRouter.post("/send/:user_id", messageController.sendMessage);

export default messageRouter;
