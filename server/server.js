import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./database/db.js";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/Route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
ConnectDB();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/', router);