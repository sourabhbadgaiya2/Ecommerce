import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { productService } from "./productService";
import { toast } from "react-toastify";

export const getAllProducts = createAsyncThunk(
  "product/get",
  async (thunkApi) => {
    try {
      return await productService.getProducts();
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const initialState = {
  product: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError == true) {
          toast.error(action.error);
        }
      });
  },
});

export default productSlice.reducer;
