import express from "express";
import { authMiddleware, isAdmin } from "../middlewares/auth.middleware.js";
import {
  addToWishList,
  createProduct,
  deleteProducts,
  deleteUploadImages,
  getAllProducts,
  getProductById,
  rating,
  updateProducts,
  uploadImages,
} from "../controller/product.ctrl.js";

import { productImgResize, uploadPhoto } from "../middlewares/uploadImages.js";

const router = express.Router();

router.post("/", authMiddleware, isAdmin, createProduct);

router.get("/", getAllProducts);

router.put("/wishlist", authMiddleware, addToWishList);

router.put("/rating", authMiddleware, rating);

router.post(
  "/upload",
  // authMiddleware,
  // isAdmin,
  uploadPhoto.array("images", 10),
  uploadImages
);

router.get("/:id", getProductById);

router.put("/:id", authMiddleware, isAdmin, updateProducts);

router.delete("/:id", authMiddleware, isAdmin, deleteProducts);

router.delete(
  "/upload/delete-img/:id",
  authMiddleware,
  isAdmin,
  deleteUploadImages
);

export default router;
