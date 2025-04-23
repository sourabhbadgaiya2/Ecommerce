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

router.post("/", authMiddleware, isAdmin, createBrand);

router.get("/", getAllBrand);

router.get("/:id", getBrand);

router.put("/:id", authMiddleware, isAdmin, updateBrand);

router.delete("/:id", authMiddleware, isAdmin, deleteBrand);

export default router;
