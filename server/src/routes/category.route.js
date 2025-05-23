import express from "express";
import { authMiddleware, isAdmin } from "../middlewares/auth.middleware.js";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getCategory,
  updateCategory,
} from "../controller/category.ctrl.js";

const router = express.Router();

router.post("/", authMiddleware, isAdmin, createCategory);

router.get("/get-category", getAllCategory);

router.get("/:id", getCategory);

router.put("/:id", authMiddleware, isAdmin, updateCategory);

router.delete("/:id", authMiddleware, isAdmin, deleteCategory);

export default router;
