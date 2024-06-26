import { Request, Response } from "express";

export const login = async (req: Request, res: Response) => {
  return res.status(200).json({ message: "Login route" });
};

export const signup = async (req: Request, res: Response) => {
  return res.status(200).json({ message: "Login route" });
};

export const logout = async (req: Request, res: Response) => {
  return res.status(200).json({ message: "Login route" });
};
