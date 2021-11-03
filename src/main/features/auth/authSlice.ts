import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { appInit } from '../app/actions';

export interface AuthState {
  currentOrganiser: Object | null;
}

const initialState: AuthState = {
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
  },
});

export const { logoutOrganiser } = authSlice.actions;

export default authSlice;
