import axios, { AxiosError } from 'axios';

// extras
import {
  LoginUserAttributes,
  RegisterUserAttributes,
  UpdateUserAttributes,
} from '../../utils/types';
import { getFromLocalStorage } from '../../utils/helpers';

export const registerUserThunk = async (
  user: RegisterUserAttributes,
  thunkAPI: any
) => {
  try {
    const { data } = await axios.post(
      'https://tasty-api.onrender.com/api/v1/auth/register',
      user
    );
    return data.user;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
};

export const loginUserThunk = async (
  user: LoginUserAttributes,
  thunkAPI: any
) => {
  try {
    const { data } = await axios.post(
      'https://tasty-api.onrender.com/api/v1/auth/login',
      user
    );
    return data.user;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
};

export const updateUserThunk = async (
  user: UpdateUserAttributes,
  thunkAPI: any
) => {
  const localStorageUser = getFromLocalStorage('user');
  try {
    const { data } = await axios.patch(
      'https://tasty-api.onrender.com/api/v1/auth/updateUser',
      user,
      {
        headers: {
          authorization: `Bearer ${localStorageUser.token}`,
        },
      }
    );
    return data.user;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
};
