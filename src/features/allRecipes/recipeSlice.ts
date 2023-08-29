import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

// types
import {
  GetAllRecipesParams,
  GetAllRecipesPayload,
  InitialFilterState,
  SingleRecipeType,
} from '../../utils/types';

// extras
import { RootState } from '../../store';
import { cuisineTypeOptions } from '../../utils/constants';

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
  cuisine: '',
  dishType: 'all',
  tag: 'all',
  totalRecipes: 0,
  numOfPages: 1,
  page: 1,
  limit: 12,
};

export const getAllRecipes = createAsyncThunk<
  GetAllRecipesPayload,
  GetAllRecipesParams
>('getAllRecipes', async (recipeFilters, thunkAPI) => {
  const { search = '', sort = 'latest', page = 1, limit = 0 } = recipeFilters;

  const {
    recipe: { cuisine, dishType },
  } = thunkAPI.getState() as RootState;

  let url = `https://tasty-api.onrender.com/api/v1/recipes?sort=${sort}&cuisine=${cuisine}&dishType=${dishType}&page=${page}`;

  if (search) {
    url = url + `&search=${search}`;
  }
  if (limit) {
    url = url + `&limit=${limit}`;
  }

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
});

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

export const getUserRecipes = createAsyncThunk(
  'allRecipes/getUserRecipes',
  async (_: undefined, thunkAPI) => {
    const {
      user,
      recipe: { sort, search },
    } = thunkAPI.getState() as RootState;

    let url = `https://tasty-api.onrender.com/api/v1/recipes/user-recipes?sort=${sort}`;

    if (search) {
      url = url + `&search=${search}`;
    }

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
      state = { ...state, [name]: value };
      return state;
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
    resetPage: (state) => {
      state.page = 1;
    },
    clearFilters: (state) => {
      return {
        ...state,
        search: '',
        cuisineOptions: cuisineTypeOptions,
        dishType: '',
        sort: '',
        page: 1,
        totalRecipes: 0,
        numOfPages: 1,
        limit: 8,
      };
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
