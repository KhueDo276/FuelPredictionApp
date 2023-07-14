import express from "express";
import { user } from "./userController.js";

const router = express.Router();
router.get("/user", user);

export default router;