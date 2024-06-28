import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../database/models/user.model";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, process.env.JWT_SECRET!, async (err: any, decoded: any) => {
    if (decoded) {
      const user = await User.findById(decoded.user_id).select("-password");

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.locals = { ...res.locals, user: decoded.user_id };
      return next();
    }

    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  });
};