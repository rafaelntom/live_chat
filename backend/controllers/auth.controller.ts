import { Request, Response } from "express";
import { User } from "../database/models/user.model";
import { UserType } from "../schemas/auth.schema";

export const signup = async (req: Request, res: Response) => {
  try {
    const payload: UserType = req.body;

    const user = await User.findOne({ username: payload.username });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // const newUser = new User(payload);

    return res.status(200).json({ message: payload });
  } catch (error) {}
};

export const login = async (req: Request, res: Response) => {
  return res.status(200).json({ message: "login route" });
};

export const logout = async (req: Request, res: Response) => {
  return res.status(200).json({ message: "logout route" });
};
