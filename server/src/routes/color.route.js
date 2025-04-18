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

router.post("/create", authMiddleware, isAdmin, createColor);

router.get("/get-category", getAllColor);

router.get("/:id", getColor);

router.put("/update/:id", authMiddleware, isAdmin, updateColor);

router.delete("/delete/:id", authMiddleware, isAdmin, deleteColor);

export default router;
