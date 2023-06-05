import axios, { AxiosError } from 'axios';

// extras
import {
  AsyncThunkConfig,
  LoginUserAttributes,
  RegisterUserAttributes,
  UpdateUserAttributes,
} from '../../utils/types';

export const registerUserThunk = async (
  url: string,
  user: RegisterUserAttributes,
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

export const loginUserThunk = async (
  url: string,
  user: LoginUserAttributes,
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
