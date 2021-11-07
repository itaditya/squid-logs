import { createAction } from '@reduxjs/toolkit';
import { GetBootData } from '../../../../apiTypes/boot';

export type AppInitPayload = {
  status: string;
  data: GetBootData['data'];
};

export const appInit = createAction<AppInitPayload>('app/init');
