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
