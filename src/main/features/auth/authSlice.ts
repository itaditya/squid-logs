import { createSlice } from '@reduxjs/toolkit';
import { appInit } from '../app/actions';
import { loginAction } from './actions';
import { GetBootData } from '../../../../apiTypes/boot';

export interface AuthState {
  loginStatus: 'idle' | 'pending' | 'success' | 'error';
  currentOrganiser: null | GetBootData['data']['currentOrganiser'];
}

const initialState: AuthState = {
  loginStatus: 'idle',
  currentOrganiser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutOrganiser: (state) => {
      state.currentOrganiser = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(appInit, (state, action) => {
      const { status, data } = action.payload;

      if (status === 'success') {
        state.currentOrganiser = data.currentOrganiser;
      }
    });

    builder.addCase(loginAction.pending, (state) => {
      state.loginStatus = 'pending';
    });

    builder.addCase(loginAction.fulfilled, (state, action) => {
      const { data } = action.payload;
      state.currentOrganiser = data.currentOrganiser;
      state.loginStatus = 'success';
    });

    builder.addCase(loginAction.rejected, (state) => {
      state.loginStatus = 'error';
    });
  },
});

export const { logoutOrganiser } = authSlice.actions;

export default authSlice;
