import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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
  user: UserData | null | undefined;
};

const initialState: InitialState = {
  isLoading: false,
  user: getFromLocalStorage('user'),
};

export const registerUser = createAsyncThunk<
  UserData,
  RegisterUserAttributes,
  { rejectValue: MyKnownError }
>('user/registerUser', registerUserThunk);

export const loginUser = createAsyncThunk<
  UserData,
  LoginUserAttributes,
  { state: RootState; rejectValue: MyKnownError }
>('user/loginUser', loginUserThunk);

export const updateUser = createAsyncThunk<
  UserData,
  UpdateUserAttributes,
  { state: RootState; rejectValue: MyKnownError }
>('user/updateUser', updateUserThunk);

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
        toast.success(`welcome ${action.payload.name}`);
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
        toast.success('updated successfully');
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload?.msg);
      });
  },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;
