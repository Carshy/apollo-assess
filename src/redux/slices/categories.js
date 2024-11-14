/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../api/axiosInstance';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await axiosInstance.get('/categories/');
    return response.data;
  },
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    status: 'idle',
    categories: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
