import express from "express";
import { authMiddleware, isAdmin } from "../middlewares/auth.middleware.js";

const router = express.Router();

// router.post("/create", authMiddleware, isAdmin, createCategory);

export default router;
