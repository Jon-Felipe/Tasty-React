import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import allRecipeReducer from './features/allRecipes/allRecipesSlice';
import recipeReducer from './features/recipe/recipeSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    allRecipes: allRecipeReducer,
    recipe: recipeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
