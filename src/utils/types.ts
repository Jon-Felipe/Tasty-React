import { RootState } from '../store';

export type NavlinksType = {
  id: number;
  text: string;
  path: string;
};

export type SingleRecipeType = {
  _id: number;
  name: string;
  description: string;
  numOfRatings: number;
  averageRating: number;
  numOfReviews: number;
  image: string;
  recipeDetails: {
    prepTime: number;
    cookTime: number;
    additionalTime: number;
    totalTime: number;
    servings: number;
    yield: string;
    difficulty: string;
  };
  nutritionFacts: {
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
  };
  tag: string;
  cuisine: string;
  mealType: string;
  ingredients: string[];
  directions: string[];
  equipment: string[];
  recipeTips: string[];
  createdBy: {
    _id: string;
    name: string;
    lastName: string;
  };
  createdAt: Date;
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
