import AsyncHandler from "express-async-handler";
import Category from "../models/category.model.js";
import User from "../models/user.model.js";
import validateMongoDbID from "../utils/validateMongoDbId.js";
import BlogCategory from "../models/blogCart.model.js";

export const createBlogCategory = AsyncHandler(async (req, res) => {
  try {
    const newCategory = await BlogCategory.create(req.body);

    res.status(201).json({
      newCategory,
    });
  } catch (error) {
    throw new Error(error);
  }
});

export const getBlogCategory = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const category = await BlogCategory.findById(id);
    res.json({ category });
  } catch (error) {
    throw new Error(error);
  }
});

export const updateBlogCategory = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const category = await BlogCategory.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({
      category,
    });
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllBlogCategory = AsyncHandler(async (req, res) => {
  try {
    const category = await BlogCategory.find();
    console.log(category, "getblogCCat");

    res.json({ category });
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteBlogCategory = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    await BlogCategory.findByIdAndDelete(id);
    res.json({ message: "delete successfully" });
  } catch (error) {
    throw new Error(error);
  }
});
