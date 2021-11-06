import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { appInit } from '../app/actions';
import { loginAction } from './actions';

export interface AuthState {
  loginStatus: 'idle' | 'pending' | 'success' | 'error';
  currentOrganiser: Object | null;
}

const initialState: AuthState = {
  loginStatus: 'idle',
  currentOrganiser: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutOrganiser: (state) => {
      state.currentOrganiser = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(appInit, (state, action: PayloadAction<Object>) => {
      const { status, data } = action.payload;

      if (status === 'success') {
        state.currentOrganiser = data.current_organiser;
      }
    });

    builder.addCase(loginAction.pending, (state) => {
      state.loginStatus = 'pending';
    });

    builder.addCase(loginAction.fulfilled, (state, action: PayloadAction<Object>) => {
      const { data } = action.payload;
      state.currentOrganiser = data.current_organiser;
      state.loginStatus = 'success';
    });
  },
});

export const { logoutOrganiser } = authSlice.actions;

export default authSlice;
