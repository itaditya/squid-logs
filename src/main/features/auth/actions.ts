import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, fetchBootData } from './api';
import { GetBootData } from '../../../../apiTypes/boot';

export const loginAction = createAsyncThunk<GetBootData, Object>(
  'auth/login',
  async (credentials, thunkApi) => {
    await login(credentials);
    const bootData = await fetchBootData();
    return bootData;
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      const { loginStatus } = state.auth;
      if (loginStatus === 'pending' || loginStatus === 'success') {
        return false;
      }
    },
  },
);
