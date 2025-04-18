import AsyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import validateMongoDbID from "../utils/validateMongoDbId.js";
import Brand from "../models/brand.model.js";

export const createBrand = AsyncHandler(async (req, res) => {
  try {
    const newBrand = await Brand.create(req.body);
    res.status(201).json({
      newBrand,
    });
  } catch (error) {
    throw new Error(error);
  }
});

export const getBrand = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const brand = await Brand.findById(id);

    res.json({ brand });
  } catch (error) {
    throw new Error(error);
  }
});

export const updateBrand = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const brand = await Brand.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({ brand });
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllBrand = AsyncHandler(async (req, res) => {
  try {
    const brand = await Brand.find();

    res.json({ brand });
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteBrand = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    await Brand.findByIdAndDelete(id);
    res.json({ message: "delete successfully" });
  } catch (error) {
    throw new Error(error);
  }
});
