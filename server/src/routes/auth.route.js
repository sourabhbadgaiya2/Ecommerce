import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getSingleUser,
  loginUser,
  unblockUser,
  blockUser,
  updateUser,
  handleRefreshToken,
  updatePassword,
  forgetPasswordToken,
  resetPassword,
  loginAdmin,
  getWishList,
  saveAddress,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrderStatus,
} from "../controller/user.ctrl.js";
import { authMiddleware, isAdmin } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", createUser);

router.post("/login", loginUser);

router.post("/admin-login", loginAdmin);

router.post("/cart", userCart);

router.get("/getCart", getUserCart);

router.delete("/empty-cart", authMiddleware, emptyCart);

router.post("/cart/apply-coupon", applyCoupon);

router.post("/cart/cash-order", authMiddleware, createOrder);

router.post("/get-orders", authMiddleware, getOrders);

router.get("/all-users", getAllUser);

router.get("/wishlist", authMiddleware, getWishList);

router.put("/saved-address", authMiddleware, saveAddress);

router.put("/update", authMiddleware, updateUser);

router.put("/refresh", handleRefreshToken);

router.put("/password", authMiddleware, updatePassword);

router.post("/forget-password", forgetPasswordToken);

router.get("/getAUser/:id", authMiddleware, isAdmin, getSingleUser);

router.delete("/deleteUser/:id", deleteUser);

router.put("/reset-password/:token", resetPassword);

router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);

router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

router.put(
  "/order/update-order/:id",
  authMiddleware,
  isAdmin,
  updateOrderStatus
);

export default router;
