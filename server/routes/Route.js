import express from "express";
import { getConversation, newConversation } from "../controller/conversationController.js";
import { addUser, getUsers } from "../controller/userController.js";
const router = express.Router();

router.post("/addUser", addUser);
router.get("/users", getUsers);
router.post("/conversation/add", newConversation);
router.post("/conversation/get", getConversation);

export default router;
