import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// types
import { RecipeType } from '../../utils/types';
import { getAllRecipesThunk, getRecipeThunk } from './recipeThunk';

type InitialState = {
  isLoading: boolean;
  recipes: RecipeType[];
  recipe: RecipeType | null;
};

const initialState: InitialState = {
  isLoading: false,
  recipes: [],
  recipe: null,
};

export const getAllRecipes = createAsyncThunk(
  'allRecipes/getRecipes',
  getAllRecipesThunk
);

export const getRecipe = createAsyncThunk(
  'allRecipes/getRecipe',
  getRecipeThunk
);

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllRecipes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recipes = action.payload;
      })
      .addCase(getAllRecipes.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getRecipe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recipe = action.payload;
      })
      .addCase(getRecipe.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {} = recipeSlice.actions;

export default recipeSlice.reducer;
