var bcrypt = require("bcryptjs");
import { Request, Response } from "express";
import { User } from "../database/models/user.model";
import { UserType } from "../schemas/auth.schema";

export const signup = async (req: Request, res: Response) => {
  try {
    const { fullName, gender, username, password }: UserType = req.body;

    const user = await User.findOne({ username: username });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const maleProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const femaleProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePicture: gender == "male" ? maleProfilePic : femaleProfilePic,
    });

    await newUser.save();

    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req: Request, res: Response) => {
  return res.status(200).json({ message: "login route" });
};

export const logout = async (req: Request, res: Response) => {
  return res.status(200).json({ message: "logout route" });
};
