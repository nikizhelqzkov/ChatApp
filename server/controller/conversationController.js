import Conversation from "../model/Conversation.js";

export const newConversation = async (req, res) => {
  const { sender, receiver } = req.body;
  const newConversation = new Conversation({
    members: [sender, receiver],
  });
  try {
    const exists = await Conversation.findOne({
      members: { $all: [sender, receiver] }
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

export const getConversation = async (req, res) => {
  const { sender, receiver } = req.body;
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [sender, receiver] }
    });
    res.status(200).json(conversation);
  } catch (error) {
    res.status(500).json(error);
  }
}
