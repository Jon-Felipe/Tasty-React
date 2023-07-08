import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// types
import { RecipeType } from '../../utils/types';
import {
  getAllRecipesThunk,
  getRecipeThunk,
  getUserRecipesThunk,
} from './recipeThunk';

interface InitialFilterState {
  search: string;
}

interface InitialState extends InitialFilterState {
  isLoading: boolean;
  recipes: RecipeType[];
  recipe: RecipeType | null;
  userRecipes: RecipeType[];
}

const initialState: InitialState = {
  isLoading: false,
  recipes: [],
  recipe: null,
  userRecipes: [],
  search: '',
};

export const getAllRecipes = createAsyncThunk(
  'allRecipes/getRecipes',
  getAllRecipesThunk
);

export const getRecipe = createAsyncThunk(
  'allRecipes/getRecipe',
  getRecipeThunk
);

export const getUserRecipes = createAsyncThunk(
  'allRecipes/getUserRecipes',
  getUserRecipesThunk
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
      })
      .addCase(getUserRecipes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userRecipes = action.payload;
      })
      .addCase(getUserRecipes.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {} = recipeSlice.actions;

export default recipeSlice.reducer;
