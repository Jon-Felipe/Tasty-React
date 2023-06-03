import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// types
import { RecipeType } from '../../utils/types';

type InitialState = {
  isLoading: boolean;
  recipes: RecipeType[];
};

const initialState: InitialState = {
  isLoading: false,
  recipes: [],
};

export const getAllRecipes = createAsyncThunk(
  'allRecipes/getRecipes',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        'https://tasty-api.onrender.com/api/v1/recipes'
      );
      return data;
    } catch (error) {}
  }
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
        state.recipes = action.payload.recipes;
      })
      .addCase(getAllRecipes.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {} = recipeSlice.actions;

export default recipeSlice.reducer;
