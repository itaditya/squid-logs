import { createSlice, createEntityAdapter, EntityState, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { appInit, AppInitPayload } from '../app/actions';
import type { GetBootData } from '../../../../apiTypes/boot';

type Participant = GetBootData['data']['participants'][number];

const participantsAdapter = createEntityAdapter<Participant>();

export const participantsDataSelectors = participantsAdapter.getSelectors<RootState>(
  (state) => state.participants.data,
);

export type ParticipantsState = {
  data: EntityState<Participant>;
};

const initialState: ParticipantsState = {
  data: participantsAdapter.getInitialState(),
};

const participantsSlice = createSlice({
  name: 'participants',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(appInit, (state, action: PayloadAction<AppInitPayload>) => {
      const { status, data } = action.payload;

      if (status === 'success') {
        participantsAdapter.addMany(state.data, data.participants);
      }
    });
  },
});

export default participantsSlice;
