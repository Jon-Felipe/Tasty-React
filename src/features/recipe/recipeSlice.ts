import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { RootState } from '../../store';
import { getUserRecipes } from '../allRecipes/allRecipesSlice';
import { AddRecipeItemType } from '../../utils/types';

interface InitialState {
  isLoading: boolean;
  name: string;
  description: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  dishType: string;
  ingredient: string;
  ingredients: string[];
  instruction: string;
  instructions: string[];
  equipment: string;
  equipments: string[];
  tip: string;
  tips: string[];
  isEditing: boolean;
}

const initialState: InitialState = {
  isLoading: false,
  name: '',
  description: '',
  prepTime: 0,
  cookTime: 0,
  servings: 0,
  difficulty: '',
  cuisine: '',
  dishType: '',
  ingredient: '',
  ingredients: [],
  instruction: '',
  instructions: [],
  equipment: '',
  equipments: [],
  tip: '',
  tips: [],
  isEditing: false,
};

export const deleteRecipe = createAsyncThunk(
  'allRecipes/deleteRecipe',
  async (id: string, thunkAPI) => {
    const {
      user: { user },
    } = thunkAPI.getState() as RootState;

    try {
      await axios.delete(
        `https://tasty-api.onrender.com/api/v1/recipes/${id}`,
        {
          headers: {
            authorization: `Bearer ${user?.token}`,
          },
        }
      );
      await thunkAPI.dispatch(getUserRecipes());
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data);
      }
    }
  }
);

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    handleChange: (state, { payload }) => {
      const { name, value } = payload;

      state = { ...state, [name]: value };
      return state;
    },
    handleAddRecipeItem: (
      state,
      { payload }: PayloadAction<AddRecipeItemType>
    ) => {
      const { name, value } = payload;

      state = { ...state, [name]: [...state[name], state[value]] };
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteRecipe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteRecipe.fulfilled, (state) => {
        state.isLoading = false;
        toast.success('recipe deleted');
      })
      .addCase(deleteRecipe.rejected, (state) => {
        state.isLoading = false;
        toast.error('could not delete recipe');
      });
  },
});

export const { handleChange, handleAddRecipeItem } = recipeSlice.actions;

export default recipeSlice.reducer;
