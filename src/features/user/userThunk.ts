import axios, { AxiosError } from 'axios';
import { RootState } from '../../store';

// extras
import {
  AsyncThunkConfig,
  LoginUserAttributes,
  MyKnownError,
  RegisterUserAttributes,
  UpdateUserAttributes,
} from '../../utils/types';
import { getFromLocalStorage } from '../../utils/helpers';

export const registerUserThunk = async (
  user: RegisterUserAttributes,
  thunkAPI: AsyncThunkConfig
) => {
  try {
    const { data } = await axios.post(
      'https://tasty-api.onrender.com/api/v1/auth/register',
      user
    );
    return data.user;
  } catch (error) {
    if (error instanceof AxiosError) {
      thunkAPI.rejectValue = error.response?.data;
    }
  }
};

export const loginUserThunk = async (
  user: LoginUserAttributes,
  thunkAPI: AsyncThunkConfig
) => {
  try {
    const { data } = await axios.post(
      'https://tasty-api.onrender.com/api/v1/auth/login',
      user
    );
    return data.user;
  } catch (error) {
    if (error instanceof AxiosError) {
      thunkAPI.rejectValue = error.response?.data;
    }
  }
};

export const updateUserThunk = async (
  user: UpdateUserAttributes,
  thunkAPI: AsyncThunkConfig
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
      thunkAPI.rejectValue = error.response?.data;
    }
  }
};
