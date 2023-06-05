import axios, { AxiosError } from 'axios';

// extras
import { AsyncThunkConfig } from '../../utils/types';

export const getAllRecipesThunk = async (
  url: string,
  thunkAPI: AsyncThunkConfig
) => {
  try {
    const { data } = await axios.get(url);
    return data.recipes;
  } catch (error) {
    if (error instanceof AxiosError) {
      thunkAPI.rejectValue = error.response?.data;
    }
  }
};

export const getRecipeThunk = async (
  url: string,
  thunkAPI: AsyncThunkConfig
) => {
  try {
    const { data } = await axios.get(url);
    return data.recipe;
  } catch (error) {
    if (error instanceof AxiosError) {
      thunkAPI.rejectValue = error.response?.data;
    }
  }
};
