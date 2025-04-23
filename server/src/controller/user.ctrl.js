import crypto from "crypto";
import jwt from "jsonwebtoken";
import uniqid from "uniqid";
import sendEmail from "./email.ctrl.js";
import User from "../models/user.model.js";
import Cart from "../models/cart.model.js";
import Coupon from "../models/coupon.model.js";
import config from "../config/env.config.js";
import asyncHandler from "express-async-handler";
import Product from "../models/product.model.js";
import validateMongoDbID from "../utils/validateMongoDbId.js";

export const createUser = asyncHandler(async (req, res, next) => {
  const { firstName, lastName, email, mobile, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }

  const newUser = new User({
    firstName,
    lastName,
    email,
    mobile,
    password,
  });
  await newUser.save();
  res.status(201).json({ message: "User created successfully", newUser });
});

export const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email }).select("+password");

  if (!existingUser) {
    throw new Error("Invalid credentials a");
  }

  const isMatch = await existingUser.comparePassword(password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const accessToken = existingUser.generateAccessToken();
  const refreshToken = existingUser.generateRefreshToken();

  await User.findByIdAndUpdate(existingUser._id, {
    refreshToken: refreshToken,
  });

  res
    .status(200)
    .cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
    })
    .json({ message: "Login successful", accessToken, user: existingUser });
});

//! Admin Login
export const loginAdmin = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email }).select("+password");

  if (!existingUser || existingUser.role !== "admin") {
    throw new Error("Invalid credentials Not Authorized");
  }

  const isMatch = await existingUser.comparePassword(password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const accessToken = existingUser.generateAccessToken();
  const refreshToken = existingUser.generateRefreshToken();

  await User.findByIdAndUpdate(existingUser._id, {
    refreshToken: refreshToken,
  });

  res
    .status(200)
    .cookie("refreshToken", refreshToken, {
      // httpOnly: false,
      // maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
      // secure: process.env.NODE_ENV === "production",
      // sameSite: "Strict",
    })
    .json({ message: "Login successful", accessToken, user: existingUser });
});

//! -----------------
export const handleRefreshToken = asyncHandler(async (req, res, next) => {
  const cookie = req.cookies.refreshToken;
  if (!cookie) {
    throw new Error("No refresh token in cookies");
  }

  const user = await User.findOne({ refreshToken: cookie });
  if (!user) {
    throw new Error("No refresh token present in DB");
  }

  jwt.verify(cookie, config.REFRESH_TOKEN_SECRET, async (err, decoded) => {
    if (err) {
      console.log(err); // helpful for debugging
      throw new Error("Invalid refresh token");
    }

    if (user._id.toString() !== decoded._id) {
      throw new Error("Token user mismatch");
    }

    const newAccessToken = user.generateAccessToken();
    res.json({ accessToken: newAccessToken });
  });
});

export const getAllUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.find();
    if (!user) {
      throw new Error("No users found");
    }
    res.status(200).json({ message: "Users fetched successfully", user });
  } catch (error) {
    throw new Error(error);
  }
});

export const getSingleUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbID(id);

  try {
    const user = await User.findById(id);
    if (!user) throw new Error("User not found");
    res.status(200).json({ message: "Users fetched successfully", user });
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const user = await User.findByIdAndDelete(id);

    res.status(200).json({ message: "Users Deleted successfully" });
  } catch (error) {
    throw new Error(error);
  }
});

export const updateUser = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbID(_id);

  const { firstName, lastName, email, mobile } = req.body;

  try {
    const updateUser = await User.findByIdAndUpdate(
      _id,
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        mobile: mobile,
      },
      {
        new: true,
      }
    );

    res.status(200).json({ message: "Users Update successfully", updateUser });
  } catch (error) {
    throw new Error(error);
  }
});

//!save address
export const saveAddress = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbID(_id);
  try {
    const { address } = req.body;
    const updateUser = await User.findByIdAndUpdate(
      _id,
      { address: address },
      { new: true }
    );

    res
      .status(200)
      .json({ message: "Users saved address successfully", updateUser });
  } catch (error) {
    throw new Error(error);
  }
});

export const blockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const blockUser = await User.findByIdAndUpdate(
      id,
      { isBlocked: true },
      { new: true }
    );

    res.status(200).json({
      message: "User blocked successfully",
      blockUser,
    });
  } catch (error) {
    throw new Error(error);
  }
});

export const unblockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const unblockUser = await User.findByIdAndUpdate(
      id,
      { isBlocked: false },
      { new: true }
    );

    res.status(200).json({
      message: "User unblock successfully",
      unblockUser,
    });
  } catch (error) {
    throw new Error(error);
  }
});

export const updatePassword = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { password } = req.body;
  validateMongoDbID(_id);
  try {
    const user = await User.findById(_id).select("+password");

    if (password) {
      user.password = password;
      const updatedPassword = await user.save();
      res.json(updatedPassword);
    } else {
      res.json(user);
    }
    res.status(200).json({
      message: "User unblock successfully",
      unblockUser,
    });
  } catch (error) {
    throw new Error(error);
  }
});

export const forgetPasswordToken = asyncHandler(async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error("user not found with this email");

    const token = await user.createPasswordResetToken();
    await user.save();

    const resetURL = `Hi, Please follow this link to reset Your Password. This link is valid till 10 minutes from now <a href="http:localhost:5000/api/auth/reset-password/${token}">Click here</a>`;

    const data = {
      to: email,
      text: "Hey User",
      subject: "Forget Password Link",
      html: resetURL,
    };
    sendEmail(data);

    res.status(200).json({ token });
  } catch (error) {
    throw new Error(error);
  }
});

export const resetPassword = asyncHandler(async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  if (!user) throw new Error("Token expired,, please try again later");
  user.password = password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  await user.save();
  res.json(user);
});

export const getWishList = asyncHandler(async (req, res) => {
  try {
    const { _id } = req.user;
    const findUser = await User.findById(_id).populate("wishlist");
    res.json(findUser);
  } catch (error) {
    throw new Error(error);
  }
});

// ! user cart

export const userCart = asyncHandler(async (req, res) => {
  const { cart } = req.body;
  try {
    let products = [];
    const user = await User.findById(req.user._id);
    // check if user already have product in cart

    const alreadyExistCart = await Cart.findOne({ orderby: user._id });
    if (alreadyExistCart) {
      alreadyExistCart.remove();
    }
    for (let i = 0; i < cart.length; i++) {
      let object = {};
      object.product = cart[i]._id;
      object.count = cart[i].count;
      object.color = cart[i].color;
      let getPrice = await Product.fidById(cart[i]._id).select("price").exec();
      object.price = getPrice.price;
      products.push(object);
    }

    let cartTotal = 0;

    for (let i = 0; i < products.length; i++) {
      cartTotal = cartTotal + products[i].price * products[i].count;
    }

    let newCart = new Cart({ products, cartTotal, orderby: user?._id }).save();

    res.json(newCart);
  } catch (error) {
    throw new Error(error);
  }
});

export const getUserCart = asyncHandler(async (req, res) => {
  try {
    const cart = await Cart.findOne({ orderby: req.user._id }).populate(
      "Products.product"
    );
    if (!cart) {
      throw new Error("Cart is not found");
    }
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
});

export const emptyCart = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  try {
    const user = await User.findOne({ _id });
    const cart = await Card.findOneAndRemove({ orderby: user._id });
    if (!user || !cart) {
      throw new Error(" not found");
    }
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
});

export const applyCoupon = asyncHandler(async (req, res) => {
  const { coupon } = req.body;
  try {
    const validCoupon = await Coupon.findOne({ name: coupon });
    if (validCoupon === null) {
      throw new Error("Invalid Coupon");
    }

    const user = await User.findOne({ _id });
    let { cartTotal } = await Cart.findOne({
      orderby: user._id,
    }).populate("Products.product");

    let totalAfterDiscount = (
      cartTotal -
      (cartTotal * validCoupon.discount) / 100
    ).toFixed(2);

    await Cart.findOneAndUpdate(
      { orderby: user._id },
      { totalAfterDiscount },
      { new: true }
    );

    res.json({ totalAfterDiscount });
  } catch (error) {
    throw new Error(error);
  }
});

export const createOrder = asyncHandler(async (req, res) => {
  const { COD, couponApplied } = req.body;
  const { _id } = req.user;
  validateMongoDbID(_id);
  try {
    if (!COD) {
      throw new Error("Create cash order failed");
    }
    const user = await User.findById(_id);
    let userCart = await Cart.findOne({ orderby: user._id });

    let finalAmount = 0;
    if (couponApplied && userCart.totalAfterDiscount) {
      finalAmount = userCart.totalAfterDiscount;
    } else {
      finalAmount = userCart.cartTotal;
    }

    let newOrder = new Order({
      product: userCart.Products,
      paymentIntent: {
        id: uniqid(),
        method: "COD",
        amount: finalAmount,
        status: "Cash on Delivery",
        created: Date.now(),
        currency: "usd",
      },
      orderby: user._id,
      orderStatus: "Cash On Delivery",
    }).save();

    let update = userCart.Products.map((item) => {
      return {
        updateOne: {
          filter: { _id: item.product._id },
          update: { $inc: { quantity: -item.count, sold: +item.count } },
        },
      };
    });

    const updated = await Product.bulkWrite(update);

    res.json({ message: "success" });
  } catch (error) {
    throw new Error(error);
  }
});

export const getOrders = asyncHandler(async (req, res) => {
  try {
    const { _id } = req.user;
    validateMongoDbID(_id);

    const userOrders = await Order.findOne({ orderby: _id }).populate(
      "Products.products"
    );
    res.json(userOrders);
  } catch (error) {
    throw new Error(error);
  }
});

export const updateOrderStatus = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    validateMongoDbID(_id);

    const updateOrderStatus = await Order.findByIdAndUpdate(
      id,
      {
        orderStatus: status,
        paymentIntent: { status: status },
      },
      { new: true }
    );
    res.json(updateOrderStatus);
  } catch (error) {
    throw new Error(error);
  }
});
