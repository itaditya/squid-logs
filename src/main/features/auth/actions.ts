import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, fetchUserData } from './api';

export const loginAction = createAsyncThunk(
  'users/fetchByIdStatus',
  async (credentials, thunkAPI) => {
    // TODO- Handle case where both API fails or only login fails. Might break into 2 actions
    await login(credentials);
    const bootData = await fetchUserData();
    return bootData;
  },
);
