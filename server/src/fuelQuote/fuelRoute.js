import express from "express";
import { fuelQuoteHistory } from "./fuelController.js";

const router = express.Router();
router.get("/fuelQuoteHistory", fuelQuoteHistory);

export default router;
