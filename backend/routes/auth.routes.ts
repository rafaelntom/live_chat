import express, { Request, Response, Router } from "express";
import { authController } from "../controllers";
import { validateRequestBody } from "../middleware/validateRequestBody.middleware";
import { ZodUserSchema, loginSchema } from "../schemas/auth.schema";

const authRouter: Router = express.Router();

authRouter.post(
  "/signup",
  validateRequestBody(ZodUserSchema),
  authController.signup
);

authRouter.post(
  "/login",
  validateRequestBody(loginSchema),
  authController.login
);

authRouter.post("/logout", authController.logout);

export default authRouter;
