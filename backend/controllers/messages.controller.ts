import { Request, Response } from "express";

const sendMessage = async (req: Request, res: Response) => {
  const { message } = req.body;

  const senderUserId = res.locals.user;
  const recipientUserId = req.params.user_id;

  return res
    .status(200)
    .json({ message: `Message sent to user with id: ${recipientUserId}` });
};

export { sendMessage };
