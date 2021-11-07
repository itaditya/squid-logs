import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../auth/authSlice';
import participantsSlice from '../participants/participantsSlice';
import adminSlice from '../admin/adminSlice';

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [participantsSlice.name]: participantsSlice.reducer,
    [adminSlice.name]: adminSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
