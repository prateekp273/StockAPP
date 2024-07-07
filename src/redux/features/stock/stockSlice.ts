import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {API} from '../../../api';
import {appUtils} from '../../../utils';
import {API_KEY} from '../../../constants';
import {StockState} from './stockType';

// initial state in app
const initialState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
  gainerData: null,
  LoserData: null,
  singleCardData: null,
} as StockState;

export const gainerAndLoser = createAsyncThunk(
  'gainerAndLoser',
  async (_, thunkAPI) => {
    try {
      // api call
      const response = await API.get(
        `query?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`,
      );
      console.log('RESPONSE[gainerAndLoser]', response.data);
      console.log('RESPONSE[top_losers]', response?.data?.top_losers);
      console.log('RESPONSE[top_gainers]', response.data?.top_gainers);
      return response.data;
    } catch (error: unknown) {
      console.debug('ERROR[gainerAndLoser]:', error);
      appUtils.crashLogs({
        error: error,
        filename: 'authSlice',
        functionName: 'gainerAndLoser',
      });
      return thunkAPI.rejectWithValue(error);
    }
  },
);
export const singleCard = createAsyncThunk(
  'singleCard',
  async (param: string, thunkAPI) => {
    console.log('🚀 ~ param:', param);

    try {
      const response = await API.get(
        `query?function=OVERVIEW&symbol=${param}&apikey=${API_KEY}`,
      );
      return response.data;
    } catch (error: unknown) {
      console.debug('ERROR[singleCard]:', error);
      appUtils.crashLogs({
        error: error,
        filename: 'authSlice',
        functionName: 'singleCard',
      });
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const stockSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(gainerAndLoser.pending, state => {
        state.isLoading = true;
      })
      .addCase(gainerAndLoser.fulfilled, (state, action) => {
        console.debug('FULLFILLED[gainerAndLoser]: ', action.payload);
        if (action.payload) {
          state.LoserData = action.payload.top_losers;
          state.gainerData = action.payload.top_gainers;
        }
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(gainerAndLoser.rejected, (state, action) => {
        console.debug('REJECTED:[gainerAndLoser] ', action.payload, state);
        state.isLoading = false;
      })
      .addCase(singleCard.pending, state => {
        state.isLoading = true;
      })
      .addCase(singleCard.fulfilled, (state, action) => {
        console.debug('FULLFILLED[singleCard]: ', action.payload);
        if (action.payload) {
          state.singleCardData = action.payload;
        }
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(singleCard.rejected, (state, action) => {
        console.debug('REJECTED:[singleCard] ', action.payload, state);
        state.isLoading = false;
      });
  },
});

export default stockSlice.reducer;
