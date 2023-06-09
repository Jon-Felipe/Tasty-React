import axios, { AxiosError } from 'axios';

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

export const getRecipeThunk = async ({ id }: { id: string }, thunkAPI: any) => {
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
