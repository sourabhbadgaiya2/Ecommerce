import User from "../models/user.model.js";
import Color from "../models/color.model.js";
import AsyncHandler from "express-async-handler";
import validateMongoDbID from "../utils/validateMongoDbId.js";

export const createColor = AsyncHandler(async (req, res) => {
  try {
    const newColor = await Color.create(req.body);
    res.status(201).json({
      newColor,
    });
  } catch (error) {
    throw new Error(error);
  }
});

export const getColor = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const color = await Color.findById(id);

    res.json({ color });
  } catch (error) {
    throw new Error(error);
  }
});

export const updateColor = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const color = await Color.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({ color });
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllColor = AsyncHandler(async (req, res) => {
  try {
    const color = await Color.find();

    res.json({ color });
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteColor = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    await Color.findByIdAndDelete(id);
    res.json({ message: "delete successfully" });
  } catch (error) {
    throw new Error(error);
  }
});
