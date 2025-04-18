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

router.post("/create", authMiddleware, isAdmin, createProduct);

router.get("/get-product", getAllProducts);

router.put("/wishlist", authMiddleware, addToWishList);

router.put("/rating", authMiddleware, rating);

router.put(
  "/upload",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImgResize,
  uploadImages
);

router.get("/:id", getProductById);

router.put("/update/:id", authMiddleware, isAdmin, updateProducts);

router.delete("/delete/:id", authMiddleware, isAdmin, deleteProducts);

router.delete("/delete-img/:id", authMiddleware, isAdmin, deleteUploadImages);

export default router;
