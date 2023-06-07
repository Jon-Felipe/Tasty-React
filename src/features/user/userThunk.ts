import axios, { AxiosError } from 'axios';

// extras
import {
  AsyncThunkConfig,
  LoginUserAttributes,
  RegisterUserAttributes,
  UpdateUserAttributes,
} from '../../utils/types';

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
  url: string,
  user: UpdateUserAttributes,
  thunkAPI: AsyncThunkConfig
) => {
  try {
    const { data } = await axios.post(url, user);
    return data.user;
  } catch (error) {
    if (error instanceof AxiosError) {
      thunkAPI.rejectValue = error.response?.data;
    }
  }
};
