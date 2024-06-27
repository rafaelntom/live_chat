import dotenv from "dotenv";
import { Response } from "express";
import jwt from "jsonwebtoken";

dotenv.config();

export const generateJWTandSetCookie = (userid: string, response: Response) => {
  const token = jwt.sign({ user_id: userid }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });

  response.cookie("token", token, {
    maxAge: 3600000,
    httpOnly: true,
    sameSite: "strict",
  });
};
