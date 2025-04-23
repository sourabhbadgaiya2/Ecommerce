import AsyncHandler from "express-async-handler";
import Category from "../models/category.model.js";
import User from "../models/user.model.js";
import validateMongoDbID from "../utils/validateMongodbId.js";


export const createCategory = AsyncHandler(async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json({
      newCategory,
    });
  } catch (error) {
    throw new Error(error);
  }
});

export const getCategory = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const category = await Category.findById(id);

    res.json({ category });
  } catch (error) {
    throw new Error(error);
  }
});

export const updateCategory = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const category = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({
      category,
    });
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllCategory = AsyncHandler(async (req, res) => {
  try {
    const category = await Category.find();

    res.json({ category });
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteCategory = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    await Category.findByIdAndDelete(id);
    res.json({ message: "delete successfully" });
  } catch (error) {
    throw new Error(error);
  }
});
