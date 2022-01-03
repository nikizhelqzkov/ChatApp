import express from "express";
import {
  getConversation,
  newConversation,
} from "../controller/conversationController.js";
import { newMessage, getMessages, newPhoto } from "../controller/mesageController.js";
import { addUser, getUsers } from "../controller/userController.js";
import multer from "multer";
import path from "path";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

router.post("/addUser", addUser);
router.get("/users", getUsers);
router.post("/conversation/add", newConversation);
router.post("/conversation/get", getConversation);
router.post("/message/add", newMessage);
router.post("/message/addPhoto", upload.single("photo"), newPhoto);
router.get("/messages/get/:id", getMessages);

export default router;
