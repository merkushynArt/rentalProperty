import { configureStore } from '@reduxjs/toolkit';
import apartmentSlice from './features/apartments/apartmentSlice.js';
import authSlice from './features/auth/authSlice.js';

export const store = configureStore({
   reducer: {
      auth: authSlice,
      apartment: apartmentSlice,
   },
});