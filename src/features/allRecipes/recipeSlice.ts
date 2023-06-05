import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

// types
import { MyKnownError, RecipeType } from '../../utils/types';
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

export const getAllRecipes = createAsyncThunk<
  RecipeType[],
  { rejectValue: MyKnownError }
>('allRecipes/getRecipes', async (_, thunkAPI) => {
  return getAllRecipesThunk(
    'https://tasty-api.onrender.com/api/v1/recipes',
    thunkAPI
  );
});

export const getRecipe = createAsyncThunk<
  RecipeType,
  string,
  { rejectValue: MyKnownError }
>('allRecipes/getRecipe', async (id, thunkAPI) => {
  return getRecipeThunk(
    `https://tasty-api.onrender.com/api/v1/recipes/${id}`,
    thunkAPI
  );
});

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
