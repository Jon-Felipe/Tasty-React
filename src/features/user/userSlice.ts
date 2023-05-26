import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';

// helpers
import {
  setToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
} from '../../utils/helpers';
import {
  LoginUserAttributes,
  MyKnownError,
  RegisterUserAttributes,
  UserData,
} from '../../utils/types';

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
  RegisterUserAttributes,
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

export const loginUser = createAsyncThunk<
  UserData,
  LoginUserAttributes,
  { rejectValue: MyKnownError }
>('user/register', async (user, thunkAPI) => {
  try {
    const { data } = await axios.post(
      'https://tasty-api.onrender.com/api/v1/auth/login',
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
        setToLocalStorage({
          key: 'user',
          value: JSON.stringify(action.payload),
        });
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload?.msg);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        setToLocalStorage({
          key: 'user',
          value: JSON.stringify(action.payload),
        });
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload?.msg);
      });
  },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;
