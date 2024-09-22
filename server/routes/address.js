import express from "express";
import { addData, fetchData } from "../controllers/address.js";

const router = express.Router();

router.post("/add-address", addData);
router.get("/fetch-data", fetchData);

export default router;
