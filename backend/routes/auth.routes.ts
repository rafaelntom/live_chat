import express, { Request, Response, Router } from "express";
import { authController } from "../controllers";

const authRouter: Router = express.Router();

authRouter.post("/signup", authController.signup);
authRouter.post("/login", authController.login);
authRouter.post("/logout", authController.logout);

export default authRouter;
