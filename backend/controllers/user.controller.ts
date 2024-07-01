import { Request, Response } from "express";
import { User } from "../database/models/user.model";

const listUsers = async (req: Request, res: Response) => {
  try {
    const userList = await User.find().select([
      "_id",
      "fullName",
      "username",
      "profilePicture",
    ]);
    return res.status(200).json({ userList });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { listUsers };
