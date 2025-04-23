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

router.post("/", authMiddleware, isAdmin, createCoupon);

router.get("/", getAllCoupon);

router.get("/:id", getCoupon);

router.put("/:id", authMiddleware, isAdmin, updateCoupon);

router.delete("/:id", authMiddleware, isAdmin, deleteCoupon);

export default router;
