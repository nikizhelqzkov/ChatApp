import mongoose from "mongoose";

export const MessageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: "string",
      required: true,
    },
    sender: {
      type: "string",
      required: true,
    },
    text: {
      type: "string",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model('Message', MessageSchema);
export default Message;
