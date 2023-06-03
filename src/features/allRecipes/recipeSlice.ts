import { createSlice } from '@reduxjs/toolkit';
import { RecipeType } from '../../utils/types';

type InitialState = {
  isLoading: boolean;
  recipes: RecipeType[];
};

const initialState: InitialState = {
  isLoading: false,
  recipes: [],
};

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {},
});

export const {} = recipeSlice.actions;

export default recipeSlice.reducer;
