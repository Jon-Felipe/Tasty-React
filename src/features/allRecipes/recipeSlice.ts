import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

// types
import { InitialFilterState, SingleRecipeType } from '../../utils/types';

// extras
import { RootState } from '../../store';
import { cuisineOptions, dishTypeOptions } from '../../utils/constants';

interface InitialState extends InitialFilterState {
  isLoading: boolean;
  recipes: SingleRecipeType[];
  userRecipes: SingleRecipeType[];
  recipe: SingleRecipeType | null;
  totalRecipes: number;
  numOfPages: number;
  page: number;
}

const initialState: InitialState = {
  isLoading: false,
  recipes: [],
  userRecipes: [],
  recipe: null,
  search: '',
  sort: 'latest',
  cuisines: [],
  cuisineOptions: cuisineOptions,
  dishTypes: [],
  dishTypeOptions: dishTypeOptions,
  totalRecipes: 0,
  numOfPages: 1,
  page: 1,
  limit: 12,
};

export const getAllRecipes = createAsyncThunk(
  'allRecipes/getAllRecipes',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        'https://tasty-api.onrender.com/api/v1/recipes'
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data);
      }
    }
  }
);

export const getRecipe = createAsyncThunk(
  'allRecipes/getRecipe',
  async (id: string, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://tasty-api.onrender.com/api/v1/recipes/${id}`
      );
      return data.recipe;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data);
      }
    }
  }
);

export const getFilteredRecipes = createAsyncThunk(
  'allRecipes/getFilteredRecipes',
  async (_, thunkAPI) => {
    const {
      recipe: { search, sort, dishTypes, cuisines, page, limit },
    } = thunkAPI.getState() as RootState;

    let url = `https://tasty-api.onrender.com/api/v1/recipes/search?sort=${sort}&limit=${limit}&page=${page}`;

    if (search) {
      url = url + `&search=${search}`;
    }
    if (dishTypes.length > 0) {
      url = url + `&dishType=${dishTypes}`;
    }
    if (cuisines.length > 0) {
      url = url + `&cuisine=${cuisines}`;
    }

    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data);
      }
    }
  }
);

export const getUserRecipes = createAsyncThunk(
  'allRecipes/getUserRecipes',
  async (_: undefined, thunkAPI) => {
    const { user } = thunkAPI.getState() as RootState;

    let url = `https://tasty-api.onrender.com/api/v1/recipes/user-recipes`;

    try {
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${user.user?.token}`,
        },
      });
      return data;
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
      if (name == 'dishTypeOptions') {
        const tempDishes = state.dishTypeOptions.map((dishType) => {
          if (dishType.text == value) {
            return { ...dishType, isChecked: !dishType.isChecked };
          }
          return dishType;
        });
        const selectedDishes = tempDishes
          .filter((dish) => dish.isChecked)
          .map((item) => item.text);

        return {
          ...state,
          dishTypeOptions: tempDishes,
          dishTypes: selectedDishes,
        };
      } else if (name == 'cuisineOptions') {
        const tempCuisines = state.cuisineOptions.map((cuisine) => {
          if (cuisine.text == value) {
            return { ...cuisine, isChecked: !cuisine.isChecked };
          }
          return cuisine;
        });
        const selectedCuisines = tempCuisines
          .filter((cuisine) => cuisine.isChecked)
          .map((item) => item.text);

        return {
          ...state,
          cuisineOptions: tempCuisines,
          cuisines: selectedCuisines,
        };
      }
      state = { ...state, [name]: value };
      return state;
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
    resetPage: (state) => {
      state.page = 1;
    },
    clearFilters: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllRecipes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllRecipes.fulfilled, (state, { payload }) => {
        const { recipes, totalRecipes, numOfPages } = payload;

        state.isLoading = false;
        state.recipes = recipes;
        state.totalRecipes = totalRecipes;
        state.numOfPages = numOfPages;
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
      .addCase(getFilteredRecipes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFilteredRecipes.fulfilled, (state, { payload }) => {
        const { recipes, totalRecipes, numOfPages } = payload;

        state.isLoading = false;
        state.recipes = recipes;
        state.totalRecipes = totalRecipes;
        state.numOfPages = numOfPages;
      })
      .addCase(getFilteredRecipes.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getUserRecipes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userRecipes = action.payload.recipes;
        state.numOfPages = action.payload.numOfPages;
      })
      .addCase(getUserRecipes.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { handleChange, changePage, resetPage, clearFilters } =
  recipeSlice.actions;

export default recipeSlice.reducer;
