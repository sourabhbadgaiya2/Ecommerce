import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { blogService } from "./blogService";
import { toast } from "react-toastify";

export const getAllBlogs = createAsyncThunk("blog/get", async (thunkApi) => {
  try {
    return await blogService.getBlogs();
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const getBlogById = createAsyncThunk("blog/get", async (thunkApi) => {
  try {
    return await blogService.getBlogById();
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

const initialState = {
  blog: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const blogSlice = createSlice({
  name: "blog",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.blog = action.payload;
      })
      .addCase(getAllBlogs.rejected, (state, action) => {
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

export default blogSlice.reducer;
