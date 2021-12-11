import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },//will have message key in future
  },
  {
    timestamps: true,
  }
);
const Conversation = mongoose.model("conversations", conversationSchema);
export default Conversation;
