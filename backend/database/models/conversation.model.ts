import { Schema, model } from "mongoose";

const conversationSchema = new Schema({
  participants: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  messages: [{ type: Schema.Types.ObjectId, ref: "Message", default: [] }],
});

const Conversation = model("Conversation", conversationSchema);

export { Conversation };
