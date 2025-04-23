import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/user/userSlice";
import productSlice from "../features/products/ProductSlice";
import blogSlice from "../features/blog/blogSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productSlice,
    blog: blogSlice,
  },
});
