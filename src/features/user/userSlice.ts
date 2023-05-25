import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

// helpers
import {
  setToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
} from '../../utils/helpers';
import { toast } from 'react-toastify';

type UserData = {
  name: string;
  lastName: string;
  email: string;
  token: string;
};

type UserAttributes = {
  name: string;
  email: string;
  password: string;
};

type MyKnownError = {
  msg: string;
};

type InitialState = {
  isLoading: boolean;
  user: UserData | null;
};

const initialState: InitialState = {
  isLoading: false,
  user: getFromLocalStorage('user'),
};

export const registerUser = createAsyncThunk<
  UserData,
  UserAttributes,
  { rejectValue: MyKnownError }
>('user/registerUser', async (user, thunkAPI) => {
  try {
    const { data } = await axios.post(
      'https://tasty-api.onrender.com/api/v1/auth/register',
      user
    );
    return data.user;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
});

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
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload?.msg);
      });
  },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;
