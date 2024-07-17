import { Request, Response } from "express";
import { Conversation } from "../database/models/conversation.model";
import { Message } from "../database/models/message.model";
import { getReceiverSocketId, io } from "../server";

const send = async (req: Request, res: Response) => {
  try {
    const { message: text } = req.body;

    const senderId = res.locals.user;
    const receiverId = req.params.receiver_user_id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      text,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
      await Promise.all([conversation.save(), newMessage.save()]);
    }

    //TODO: Emit a socket event to the receiver, so they can see the message in real-time (use socket.io) || TO BE IMPLEMENTED

    const receiverSocketId = getReceiverSocketId(receiverId);

    if (receiverId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    return res.status(201).json(newMessage);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const read = async (req: Request, res: Response) => {
  try {
    const senderId = res.locals.user;
    const { receiver_user_id: userToChatWith } = req.params;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatWith] },
    })
      .populate("messages")
      .sort({ createdAt: 1 });

    if (!conversation) return res.status(200).json([]);

    return res.status(200).json(conversation.messages);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { send, read };
