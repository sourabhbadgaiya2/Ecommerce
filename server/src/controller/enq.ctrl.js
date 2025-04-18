import Enq from "../models/enq.model.js";
import User from "../models/user.model.js";
import AsyncHandler from "express-async-handler";
import validateMongoDbID from "../utils/validateMongoDbId.js";

export const createEnq = AsyncHandler(async (req, res) => {
  try {
    const newEnq = await Enq.create(req.body);
    res.status(201).json({
      newEnq,
    });
  } catch (error) {
    throw new Error(error);
  }
});

export const getEnq = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const enq = await Enq.findById(id);

    res.json({ enq });
  } catch (error) {
    throw new Error(error);
  }
});

export const updateEnq = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const enq = await Enq.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({ enq });
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllEnq = AsyncHandler(async (req, res) => {
  try {
    const enq = await Enq.find();

    res.json({ enq });
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteEnq = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    await Enq.findByIdAndDelete(id);
    res.json({ message: "delete successfully" });
  } catch (error) {
    throw new Error(error);
  }
});
