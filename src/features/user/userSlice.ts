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
  UpdateUserAttributes,
} from '../../utils/types';
import { RootState } from '../../store';
import {
  loginUserThunk,
  registerUserThunk,
  updateUserThunk,
} from './userThunk';

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
  return registerUserThunk(
    'https://tasty-api.onrender.com/api/v1/auth/register',
    user,
    thunkAPI
  );
});

export const loginUser = createAsyncThunk<
  UserData,
  LoginUserAttributes,
  { rejectValue: MyKnownError }
>('user/loginUser', async (user, thunkAPI) => {
  return loginUserThunk(
    'https://tasty-api.onrender.com/api/v1/auth/login',
    user,
    thunkAPI
  );
});

export const updateUser = createAsyncThunk<
  UserData,
  UpdateUserAttributes,
  { state: RootState; rejectValue: MyKnownError }
>('user/updateUser', async (user, thunkAPI) => {
  return updateUserThunk(
    'https://tasty-api.onrender.com/api/v1/auth/updateUser',
    user,
    thunkAPI
  );
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
        toast.success(`Welcome ${action.payload.name}!`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload?.msg);
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        setToLocalStorage({
          key: 'user',
          value: JSON.stringify(action.payload),
        });
        toast.success('User Updated!');
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload?.msg);
      });
  },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;
