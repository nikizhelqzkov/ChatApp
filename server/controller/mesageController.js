import Message from "../model/Message.js";
import Conversation from "../model/Conversation.js";
export const newMessage = async (req, res) => {
  const newMessage = new Message({
    conversationId: req.body.conversationId,
    sender: req.body.sender,
    text: req.body.text,
    photo: req.file.filename,
  });
  try {
    await newMessage.save();
    await Conversation.findByIdAndUpdate(req.body.conversationId, {
      message: req.body.text,
    });
    res.status(200).json("Message added successfully");
  } catch (error) {
    res.status(500).json(`Error with adding message. Error: ${error}`);
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({ conversationId: req.params.id });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json(`Error with getting messages. Error: ${error}`);
  }
};
