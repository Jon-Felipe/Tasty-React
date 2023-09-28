import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

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
  ingredients: string[];
  instructions: string[];
  equipment: string[];
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
  ingredients: [''],
  instructions: [''],
  equipment: [''],
  tips: [''],
  isEditing: false,
};

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {},
});

export const {} = recipeSlice.actions;

export default recipeSlice.reducer;
