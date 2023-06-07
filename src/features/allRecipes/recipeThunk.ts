import axios, { AxiosError } from 'axios';

// extras
import { AsyncThunkConfig } from '../../utils/types';

export const getAllRecipesThunk = async (
  _: undefined,
  thunkAPI: AsyncThunkConfig
) => {
  try {
    const { data } = await axios.get(
      'https://tasty-api.onrender.com/api/v1/recipes'
    );
    return data.recipes;
  } catch (error) {
    if (error instanceof AxiosError) {
      thunkAPI.rejectValue = error.response?.data;
    }
  }
};

export const getRecipeThunk = async (
  { id }: { id: string },
  thunkAPI: AsyncThunkConfig
) => {
  try {
    const { data } = await axios.get(
      `https://tasty-api.onrender.com/api/v1/recipes/${id}`
    );
    return data.recipe;
  } catch (error) {
    if (error instanceof AxiosError) {
      thunkAPI.rejectValue = error.response?.data;
    }
  }
};
