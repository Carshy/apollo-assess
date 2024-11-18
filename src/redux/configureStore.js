import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './slices/categories';
import fetchJokesReducer from './slices/jokesSlice';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    jokes: fetchJokesReducer,

  },
  devTools: process.env.NODE_ENV !== 'production', // Enable devtools in development mode
});

export default store;
