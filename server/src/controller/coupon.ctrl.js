import AsyncHandler from "express-async-handler";
import Coupon from "../models/coupon.model.js";
import User from "../models/user.model.js";
import validateMongoDbID from "../utils/validateMongoDbId.js";

export const createCoupon = AsyncHandler(async (req, res) => {
  try {
    const newCoupon = await Coupon.create(req.body);
    res.status(201).json({
      newCoupon,
    });
  } catch (error) {
    throw new Error(error);
  }
});

export const getCoupon = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const getCoupon = await Coupon.findById(id);

    res.json({ getCoupon });
  } catch (error) {
    throw new Error(error);
  }
});

export const updateCoupon = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const update = await Coupon.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({ update });
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllCoupon = AsyncHandler(async (req, res) => {
  try {
    const allCoupon = await Coupon.find();

    res.json({ allCoupon });
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteCoupon = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    await Coupon.findByIdAndDelete(id);
    res.json({ message: "delete successfully" });
  } catch (error) {
    throw new Error(error);
  }
});
