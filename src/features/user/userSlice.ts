import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// helpers
import { setToLocalStorage } from '../../utils/helpers';

export interface UserState {
  user: {
    name: string;
    email: string;
  };
}

const initialState: UserState = {
  user: {
    name: '',
    email: '',
  },
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
  },
});

export const { registerUser } = userSlice.actions;

export default userSlice.reducer;
