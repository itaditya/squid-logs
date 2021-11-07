import { createSlice, createEntityAdapter, PayloadAction, EntityState } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { fetchOrganisersList, mutateEmailVerificationStatus } from './api';
import { GetListOrganisers } from '../../../../apiTypes/organisers/list';

type ApiStatus = 'idle' | 'pending' | 'success' | 'error' | 'invalid';

type Organiser = GetListOrganisers['data'][number];

const organisersAdapter = createEntityAdapter<Organiser>();

export const organisersDataSelectors = organisersAdapter.getSelectors<RootState>(
  (state) => state.admin.organisers.data,
);

export const fetchOrganisersListAction = createAsyncThunk('organisers/list', async () => {
  const organisersList = await fetchOrganisersList();
  return organisersList;
});

export const verifyEmailToggleAction = createAsyncThunk(
  'organisers/verifyEmailToggle',
  async (organiserId, thunkApi) => {
    const state = thunkApi.getState();
    const organiser = organisersDataSelectors.selectById(state, organiserId);
    const responseData = await mutateEmailVerificationStatus({
      organiserId,
      emailVerified: !organiser?.emailVerified,
    });
    return responseData;
  },
);

export interface AdminState {
  organisers: {
    data: EntityState<Organiser>;
    apiStatus: {
      getOrganisers: ApiStatus;
      verifyEmail: {
        byId: {
          [key: string]: ApiStatus;
        };
      };
    };
  };
}

const initialState: AdminState = {
  organisers: {
    data: organisersAdapter.getInitialState(),
    apiStatus: {
      getOrganisers: 'idle',
      verifyEmail: {
        byId: {},
      },
    },
  },
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrganisersListAction.pending, (state) => {
      state.organisers.apiStatus.getOrganisers = 'pending';
    });
    builder.addCase(fetchOrganisersListAction.fulfilled, (state, action: PayloadAction<GetListOrganisers>) => {
      const { data } = action.payload;
      const organisers = data || [];
      state.organisers.apiStatus.getOrganisers = 'success';
      organisersAdapter.addMany(state.organisers.data, organisers);
    });
    builder.addCase(verifyEmailToggleAction.pending, (state, action) => {
      const organiserId = action.meta.arg;

      if (organiserId) {
        state.organisers.apiStatus.verifyEmail.byId[organiserId] = 'pending';
      }
    });
    builder.addCase(verifyEmailToggleAction.fulfilled, (state, action) => {
      const organiserId = action.meta.arg;
      const emailVerified = action.payload.data.emailVerified;

      if (organiserId) {
        state.organisers.apiStatus.verifyEmail.byId[organiserId] = 'success';
        organisersAdapter.updateOne(state.organisers.data, {
          id: organiserId,
          changes: {
            emailVerified: emailVerified,
          },
        });
      }
    });
  },
});

export default adminSlice;
