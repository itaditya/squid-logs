import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../auth/authSlice';
import adminSlice from '../admin/adminSlice';

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [adminSlice.name]: adminSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
