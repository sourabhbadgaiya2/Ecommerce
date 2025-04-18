import express from "express";
import { authMiddleware, isAdmin } from "../middlewares/auth.middleware.js";
import {
  createEnq,
  deleteEnq,
  getAllEnq,
  getEnq,
  updateEnq,
} from "../controller/enq.ctrl.js";

const router = express.Router();

router.post("/create", authMiddleware, isAdmin, createEnq);

router.get("/get-category", getAllEnq);

router.get("/:id", getEnq);

router.put("/update/:id", authMiddleware, isAdmin, updateEnq);

router.delete("/delete/:id", authMiddleware, isAdmin, deleteEnq);

export default router;
