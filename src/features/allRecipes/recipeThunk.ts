import axios, { AxiosError } from 'axios';
import { getFromLocalStorage } from '../../utils/helpers';

export const getAllRecipesThunk = async (_: undefined, thunkAPI: any) => {
  try {
    const { data } = await axios.get(
      'https://tasty-api.onrender.com/api/v1/recipes'
    );
    return data.recipes;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
};

export const getRecipeThunk = async (id: string, thunkAPI: any) => {
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
};

export const getUserRecipesThunk = async (_: undefined, thunkAPI: any) => {
  const localStorageUser = getFromLocalStorage('user');

  try {
    const { data } = await axios.get(
      `https://tasty-api.onrender.com/api/v1/recipes/my-recipes`,
      {
        headers: {
          authorization: `Bearer ${localStorageUser.token}`,
        },
      }
    );
    return data.recipes;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
};
