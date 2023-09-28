import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

const initialState = {};

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {},
});

export const {} = recipeSlice.actions;

export default recipeSlice.reducer;
