import express from "express";
import { authMiddleware, isAdmin } from "../middlewares/auth.middleware.js";
import {
  createCoupon,
  deleteCoupon,
  getAllCoupon,
  getCoupon,
  updateCoupon,
} from "../controller/coupon.ctrl.js";

const router = express.Router();

router.post("/create", authMiddleware, isAdmin, createCoupon);

router.get("/get-category", getAllCoupon);

router.get("/:id", getCoupon);

router.put("/update/:id", authMiddleware, isAdmin, updateCoupon);

router.delete("/delete/:id", authMiddleware, isAdmin, deleteCoupon);

export default router;
