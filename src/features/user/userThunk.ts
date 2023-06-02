import axios, { AxiosError } from 'axios';

// extras
import { AsyncThunkConfig, RegisterUserAttributes } from '../../utils/types';

export const registerUserThunk = async (
  url: string,
  user: RegisterUserAttributes,
  thunkAPI: AsyncThunkConfig
) => {
  try {
    const response = await axios.post(url, user);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      thunkAPI.rejectValue = error.response?.data;
    }
  }
};
