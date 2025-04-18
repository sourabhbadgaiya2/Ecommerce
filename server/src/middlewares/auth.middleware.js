import AsyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import config from "../config/env.config.js";

export const authMiddleware = AsyncHandler(async (req, res, next) => {
  let token;
  if (
    req?.headers.authorization &&
    req.headers.authorization?.startsWith("Bearer")
  ) {
    token = req.headers.authorization?.split(" ")[1];
    try {
      const decoded = jwt.verify(token, config.ACCESS_TOKEN_SECRET);
      req.user = await User.findById(decoded._id);
      next();
    } catch (error) {
      res.status(401);
      console.log(error.message)
      throw new Error("Not authorized, token failed, Please login again");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

export const isAdmin = AsyncHandler(async (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403);
    throw new Error("Not authorized as an admin");
  }
});
