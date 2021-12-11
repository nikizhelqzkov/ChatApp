import Conversation from "../model/Conversation.js";

export const newConversation = async (req, res) => {
  const { senderId, receiverId } = req.body;
  const newConversation = new Conversation({
    members: [senderId, receiverId],
  });
  try {
    const exists = await Conversation.findOne({
      members: { $all: [senderId, receiverId] }
    });
    if (exists) {
      res.status(200).json("Conversation has been already added");
      return;
    }
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (error) {
    res.status(500).json(error);
  }
};
