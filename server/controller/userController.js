import mongoose from "mongoose";
import User from "../model/User.js";
export const addUser = async (req, res) => {
  try {
    const exist = await User.findOne({ googleId: req.body.googleId });
    if (exist) {
      res.status(200).json("user already exists");
      return;
    }
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
};
