import { Request, Response } from "express";

export const login = async (req: Request, res: Response) => {
  return res.status(200).json({ message: "login route" });
};

export const signup = async (req: Request, res: Response) => {
  return res.status(200).json({ message: "signup route" });
};

export const logout = async (req: Request, res: Response) => {
  return res.status(200).json({ message: "logout route" });
};
