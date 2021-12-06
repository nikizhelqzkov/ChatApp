import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./database/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

ConnectDB();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
