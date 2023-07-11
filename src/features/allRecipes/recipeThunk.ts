import axios, { AxiosError } from 'axios';
import { getFromLocalStorage } from '../../utils/helpers';

export const getUserRecipesThunk = async (_: undefined, thunkAPI: any) => {
  const localStorageUser = getFromLocalStorage('user');

  try {
    const { data } = await axios.get(
      `https://tasty-api.onrender.com/api/v1/recipes/user-recipes`,
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
