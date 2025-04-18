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

router.post("/create", authMiddleware, isAdmin, createBlogCategory);

router.get("/get-category", getAllBlogCategory);

router.get("/:id", getBlogCategory);

router.put("/update/:id", authMiddleware, isAdmin, updateBlogCategory);

router.delete("/delete/:id", authMiddleware, isAdmin, deleteBlogCategory);

export default router;
