import { Request, Response } from "express";
import { User } from "../database/models/user.model";
import { LoginType, UserType } from "../schemas/auth.schema";
import bcrypt from "bcryptjs";
import { generateJWTandSetCookie } from "../utils/generateJWT";

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
    generateJWTandSetCookie(newUser._id.toString(), res);

    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { password, username }: LoginType = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateJWTandSetCookie(user._id.toString(), res);

    return res.status(200).json({ token: token });
  } catch (error) {
    console.error(error);
  }
};

export const logout = async (req: Request, res: Response) => {
  res.clearCookie("token");
  return res.status(204).json();
};
