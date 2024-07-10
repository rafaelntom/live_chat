import { Request, Response } from "express";
import { User } from "../database/models/user.model";

const listUsers = async (req: Request, res: Response) => {
  const { user: loggedInUser } = res.locals;
  console.log(loggedInUser);

  try {
    const userList = await User.find({ _id: { $ne: loggedInUser } }).select([
      "_id",
      "fullName",
      "username",
      "profilePicture",
      "gender",
    ]);

    return res.status(200).json({ userList });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error with the User Controller. Internal server error",
    });
  }
};

export { listUsers };
