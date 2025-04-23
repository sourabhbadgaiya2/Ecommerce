import express from "express";
import { authMiddleware, isAdmin } from "../middlewares/auth.middleware.js";
import {
  createBlogCategory,
  deleteBlogCategory,
  getAllBlogCategory,
  getBlogCategory,
  updateBlogCategory,
} from "../controller/blogCart.ctrl.js";

const router = express.Router();

router.post("/", authMiddleware, isAdmin, createBlogCategory);

router.get("/", getAllBlogCategory);

router.get("/:id", getBlogCategory);

router.put("/:id", authMiddleware, isAdmin, updateBlogCategory);

router.delete("/:id", authMiddleware, isAdmin, deleteBlogCategory);

export default router;
