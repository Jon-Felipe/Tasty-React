import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

// types
import { MyKnownError, RecipeType } from '../../utils/types';

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
  try {
    const { data } = await axios.get(
      'https://tasty-api.onrender.com/api/v1/recipes'
    );
    return data.recipes;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
});

export const getRecipe = createAsyncThunk<
  RecipeType,
  string,
  { rejectValue: MyKnownError }
>('allRecipes/getRecipe', async (id, thunkAPI) => {
  try {
    const { data } = await axios.get(
      `https://tasty-api.onrender.com/api/v1/recipes/${id}`
    );
    return data.recipe;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
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
