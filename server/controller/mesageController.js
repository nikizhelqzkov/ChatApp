import Message from "../model/Message.js";

export const newMessage = async (req, res) => {
  const newMessage = new Message(req.body);
  try {
    await newMessage.save();
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
