import express from "express";
import { authMiddleware, isAdmin } from "../middlewares/auth.middleware.js";
import {
  createColor,
  deleteColor,
  getAllColor,
  getColor,
  updateColor,
} from "../controller/color.ctrl.js";

const router = express.Router();

router.post("/", authMiddleware, isAdmin, createColor);

router.get("/", getAllColor);

router.get("/:id", getColor);

router.put("/:id", authMiddleware, isAdmin, updateColor);

router.delete("/:id", authMiddleware, isAdmin, deleteColor);

export default router;
