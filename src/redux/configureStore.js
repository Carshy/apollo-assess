import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './slices/categories';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
  devTools: process.env.NODE_ENV !== 'production', // Enable devtools in development mode
});

export default store;
