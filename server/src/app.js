import cors from "cors";
import morgan from "morgan";
import express from "express";
import cookieParser from "cookie-parser";

// Importing routes
import authRoutes from "./routes/auth.route.js";
import enqRoutes from "./routes/enq.route.js";
import blogRoutes from "./routes/blog.route.js";
import colorRoutes from "./routes/color.route.js";
import orderRoutes from "./routes/order.route.js";
import brandRoutes from "./routes/brand.route.js";
import couponRoutes from "./routes/coupon.route.js";
import productRoutes from "./routes/product.route.js";
import blogCartRoutes from "./routes/blogCart.route.js";
import categoryRoutes from "./routes/category.route.js";
import ErrorHandler from "./middlewares/error.middleware.js";

const app = express();

app.use(cors());

// Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/enq", enqRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/color", colorRoutes);
app.use("/api/brand", brandRoutes);
app.use("/api/coupon", couponRoutes);
app.use("/api/product", productRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/blogCategory", blogCartRoutes);

// Error handling middleware
app.use((req, res, next) => {
  const error = new Error(`req url not found: ${req.originalUrl}`);
  res.status(404);
  next(error);
});

app.use(ErrorHandler);

export default app;
