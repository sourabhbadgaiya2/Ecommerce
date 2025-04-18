import User from "../models/user.model.js";
import Product from "../models/product.model.js";
import asyncHandler from "express-async-handler";
import validateMongoDbID from "../utils/validateMongoDbId.js";
import slugify from "slugify";
import fs from "fs";
import {
  cloudinaryDeleteImg,
  cloudinaryUploadingImg,
} from "../utils/cloudinary.js";

export const createProduct = asyncHandler(async (req, res) => {
  if (req.body.title) {
    req.body.slug = slugify(req.body.title);
  }
  try {
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    throw new Error(error);
  }
});

export const updateProducts = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (req.body.title) {
    req.body.slug = slugify(req.body.title);
  }
  try {
    const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updateProduct) throw new Error("Product not found");
    res.json(updateProduct);
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteProducts = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    await Product.findByIdAndDelete(id);
    res.json("delete successfully");
  } catch (error) {
    throw new Error(error);
  }
});

export const getProductById = asyncHandler(async (req, res) => {
  try {
    const findProduct = await Product.findById(req.params.id);
    res.json(findProduct);
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllProducts = asyncHandler(async (req, res) => {
  // 1. Filtering
  const queryObj = { ...req.query };
  const excludeFields = ["page", "sort", "limit", "fields"];
  excludeFields.forEach((field) => delete queryObj[field]);

  // 2. Advanced filtering (gte, lte, etc.)
  let queryStr = JSON.stringify(queryObj);
  queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
  let query = Product.find(JSON.parse(queryStr));

  // 3. Sorting
  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ");
    query = query.sort(sortBy);
  } else {
    query = query.sort("-createdAt");
  }

  // 4. Field Limiting
  if (req.query.fields) {
    const fields = req.query.fields.split(",").join(" ");
    query = query.select(fields);
  } else {
    query = query.select("-__v");
  }

  // 5. Pagination
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const totalProducts = await Product.countDocuments(JSON.parse(queryStr));
  if (skip >= totalProducts) {
    throw new Error("This page does not exist");
  }

  query = query.skip(skip).limit(limit);

  // 6. Execute Query
  const products = await query;

  res.json({
    total: totalProducts,
    count: products.length,
    page,
    limit,
    data: products,
  });
});

//! -----
export const addToWishList = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { productId } = req.body;

  try {
    const user = await User.findById(_id);

    const alreadyAdded = user.wishlist.find(
      (id) => id.toString() === productId
    );

    if (alreadyAdded) {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $pull: { wishlist: productId },
        },
        { new: true }
      );

      res.json(user);
    } else {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $push: { wishlist: productId },
        },
        { new: true }
      );

      res.json(user);
    }
  } catch (error) {
    throw new Error(error);
  }
});

export const rating = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { star, productId, comment } = req.body;

  try {
    const product = await Product.findById(productId);

    const alreadyRated = product.ratings.find(
      (userId) => userId.postedBy.toString() === _id.toString()
    );

    if (alreadyRated) {
      const updateRating = await Product.updateOne(
        {
          ratings: { $elemMatch: alreadyRated },
        },
        {
          $set: { "ratings.$.star": star, "ratings.$.comment": comment },
        },
        { new: true }
      );
    } else {
      const rateProduct = await Product.findByIdAndUpdate(
        productId,
        {
          $push: { ratings: { star: star, comment: comment, postedBy: _id } },
        },
        { new: true }
      );

      res.json(rateProduct);
    }

    const getAllRatings = await Product.findById(productId);

    let totalRatings = getAllRatings.ratings.length;
    let ratingSum = getAllRatings.ratings
      .map((i) => i.star)
      .reduce((prev, curr) => prev + curr, 0);

    let actualRating = Math.round(ratingSum / totalRatings);

    let finalProduct = await Product.findByIdAndUpdate(
      productId,
      { totalRating: actualRating },
      { new: true }
    );

    res.json(finalProduct);
  } catch (error) {
    throw new Error(error);
  }
});

export const uploadImages = asyncHandler(async (req, res) => {
  // const { id } = req.params;
  // validateMongoDbID(id);
  try {
    const uploader = (path) => cloudinaryUploadingImg(path, "images");
    const urls = [];
    const files = req.files;

    for (const file of files) {
      const { path } = file;
      const newPath = await uploader(path);
      urls.push(newPath);
      fs.unlinkSync(path);
    }
    const images = urls.map((file) => {
      return file;
    });

    // const findProduct = await Product.findByIdAndUpdate(
    //   id,
    //   {
    //     images: urls.map((file) => {
    //       return file;
    //     }),
    //   },
    //   { new: true }
    // );

    res.json(images);
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteUploadImages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const uploader = cloudinaryDeleteImg(id, "images");
    res.json({ message: "Deleted" });
  } catch (error) {
    throw new Error(error);
  }
});
