import { RootState } from '../store';

export type NavlinksType = {
  id: number;
  text: string;
  path: string;
};

export type RecipeCategoryType = {
  id: number;
  text: string;
};

export type RecipeType = {
  id: number;
  text: string;
  description: string;
  averate_rating: number;
  ratings: number;
  reviews: number;
  author: string;
  image: string;
  created_at: Date;
  recipe_details: {
    prep_time: number;
    cook_time: number;
    additional_time: number;
    total_time: number;
    servings: number;
    yield: string;
    difficulty: string;
  };
  ingredients: string[];
  directions: string[];
  nutrition_facts: {
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
  };
  equipment: string[];
  recipeTips: string[];
};

export type MealOptionType = {
  id: number;
  text: string;
};

export type UserData = {
  name: string;
  lastName: string;
  email: string;
  token: string;
};

export type RegisterUserAttributes = {
  name: string;
  email: string;
  password: string;
};

export type LoginUserAttributes = {
  email: string;
  password: string;
};

export type UpdateUserAttributes = {
  name: string;
  lastName: string;
  email: string;
};

export type MyKnownError = {
  msg: string;
};

export type AsyncThunkConfig = {
  /** return type for `thunkApi.getState` */
  state?: RootState;
  /** type of the `extra` argument for the thunk middleware, which will be passed in as `thunkApi.extra` */
  extra?: unknown;
  /** type to be passed into `rejectWithValue`'s first argument that will end up on `rejectedAction.payload` */
  rejectValue?: MyKnownError;
  /** return type of the `serializeError` option callback */
  serializedErrorType?: unknown;
  /** type to be returned from the `getPendingMeta` option callback & merged into `pendingAction.meta` */
  pendingMeta?: unknown;
  /** type to be passed into the second argument of `fulfillWithValue` to finally be merged into `fulfilledAction.meta` */
  fulfilledMeta?: unknown;
  /** type to be passed into the second argument of `rejectWithValue` to finally be merged into `rejectedAction.meta` */
  rejectedMeta?: unknown;
};
