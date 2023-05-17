import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// helpers
import {
  setToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
} from '../../utils/helpers';

export interface UserState {
  user: {
    name: string;
    email: string;
    address: string;
    city: string;
    area: string;
    zipCode: number;
    country: string;
  } | null;
}

const initialState: UserState = {
  user: getFromLocalStorage('user'),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<UserState>) => {
      const { user } = action.payload;
      state.user = user;
      setToLocalStorage({ key: 'user', value: JSON.stringify(user) });
    },
    logoutUser: (state) => {
      state.user = null;
      removeFromLocalStorage('user');
    },
  },
});

export const { registerUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
