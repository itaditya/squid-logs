import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, fetchBootData } from './api';

export const loginAction = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  // TODO- Handle case where both API fails or only login fails. Might break into 2 actions
  await login(credentials);
  const bootData = await fetchBootData();
  return bootData;
});
