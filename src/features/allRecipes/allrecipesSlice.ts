import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';

// types
import {
  InitialFilterState,
  SingleRecipeType,
  HandleChangeType,
} from '../../utils/types';

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
      allRecipes: {
        search,
        sort,
        dishTypeOptions,
        cuisineOptions,
        page,
        limit,
      },
    } = thunkAPI.getState() as RootState;

    const dishTypes = dishTypeOptions
      .filter((dishType) => dishType.isChecked)
      .map((recipe) => recipe.text);
    const cuisines = cuisineOptions
      .filter((dishType) => dishType.isChecked)
      .map((recipe) => recipe.text);

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

export const allRecipesSlice = createSlice({
  name: 'allRecipes',
  initialState,
  reducers: {
    handleChange: (state, { payload }: PayloadAction<HandleChangeType>) => {
      const { name, value } = payload;
      if (name == 'dishTypeOptions' || name == 'cuisineOptions') {
        const tempRecipeTypes = state[name].map((recipeType) => {
          if (recipeType.text == value) {
            return { ...recipeType, isChecked: !recipeType.isChecked };
          }
          return recipeType;
        });

        return { ...state, [name]: tempRecipeTypes };
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
        const { recipes } = payload;

        state.isLoading = false;
        state.recipes = recipes;
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
        state.totalRecipes = action.payload.totalRecipes;
      })
      .addCase(getUserRecipes.rejected, (state) => {
        state.isLoading = false;
      })
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

export const { handleChange, changePage, resetPage, clearFilters } =
  allRecipesSlice.actions;

export default allRecipesSlice.reducer;
