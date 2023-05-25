import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// helpers
import {
  setToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
} from '../../utils/helpers';

type User = {
  name: string;
  email: string;
};

type InitialState = {
  isLoading: boolean;
  user: User | null;
};

const initialState: InitialState = {
  isLoading: false,
  user: getFromLocalStorage('user'),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<User>) => {
      const { payload } = action;
      state.user = payload;
      setToLocalStorage({ key: 'user', value: JSON.stringify(payload) });
    },
    logoutUser: (state) => {
      state.user = null;
      removeFromLocalStorage('user');
    },
  },
});

export const { registerUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
