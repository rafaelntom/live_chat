import express, { Router } from "express";
import { userController } from "../controllers";
import { verifyToken } from "../middleware/verifyToken";

const userRouter: Router = express.Router();

userRouter.get("/", verifyToken, userController.listUsers);

export default userRouter;
