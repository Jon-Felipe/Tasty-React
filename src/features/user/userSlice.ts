import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// helpers
import {
  setToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
} from '../../utils/helpers';

type User = {
  name: string;
  email: string;
  password: string;
};

type InitialState = {
  isLoading: boolean;
  user: User | null;
};

const initialState: InitialState = {
  isLoading: false,
  user: getFromLocalStorage('user'),
};

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user: User, thunkAPI) => {
    try {
      const { data } = await axios.post(
        'https://tasty-api.onrender.com/api/v1/auth/register',
        user
      );
      return data.user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      removeFromLocalStorage('user');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<User>) => {
        const { payload } = action;
        state.isLoading = false;
        state.user = payload;
        // setToLocalStorage({key: 'user', value: payload});
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;
