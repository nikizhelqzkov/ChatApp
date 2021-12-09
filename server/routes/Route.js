import express from "express";
import { addUser, getUsers } from "../controller/userController.js";
const router = express.Router();

router.post("/addUser", addUser);
router.get("/users", getUsers);

export default router;
