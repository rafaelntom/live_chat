import { Request, Response } from "express";

const sendMessage = async (req: Request, res: Response) => {
  const { user_id } = req.params;
  return res
    .status(200)
    .json({ message: `Message sent to user with id: ${user_id}` });
};

export { sendMessage };
