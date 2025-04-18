import express from "express";
import { authMiddleware, isAdmin } from "../middlewares/auth.middleware.js";
import {
  createBrand,
  deleteBrand,
  getAllBrand,
  getBrand,
  updateBrand,
} from "../controller/brand.ctrl.js";

const router = express.Router();

router.post("/create", authMiddleware, isAdmin, createBrand);

router.get("/get-category", getAllBrand);

router.get("/:id", getBrand);

router.put("/update/:id", authMiddleware, isAdmin, updateBrand);

router.delete("/delete/:id", authMiddleware, isAdmin, deleteBrand);

export default router;
