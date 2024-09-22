import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { dbConnection } from "./connection/dbConnection.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, "http://localhost:5173"],
  })
);

const port = process.env.PORT;

dbConnection().then(() => {
  app.listen(port, () => {
    console.log("Server Running On Port 4000 🚀🚀");
  });
});
