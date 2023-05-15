import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  user: {
    name: string;
    email: string;
    password: string;
  };
}

const initialState: UserState = {
  user: {
    name: '',
    email: '',
    password: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
