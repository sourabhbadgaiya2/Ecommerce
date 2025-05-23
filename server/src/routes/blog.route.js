import express from "express";
import {
  createBlog,
  deleteBlog,
  disLikeBlog,
  getAllBlog,
  getBlog,
  likeBlog,
  updateBlog,
  uploadImages,
} from "../controller/blog.ctrl.js";
import { authMiddleware, isAdmin } from "../middlewares/auth.middleware.js";
import { productImgResize, uploadPhoto } from "../middlewares/uploadImages.js";

const router = express.Router();

router.post("/", authMiddleware, isAdmin, createBlog);

router.put("/likes", authMiddleware, likeBlog);

router.get("/", getAllBlog);

router.put("/dislikes", authMiddleware, disLikeBlog);

router.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 2),
  productImgResize,
  uploadImages
);

router.put("/:id", authMiddleware, isAdmin, updateBlog);

router.get("/:id", getBlog);

router.delete("/:id", authMiddleware, isAdmin, deleteBlog);

export default router;
