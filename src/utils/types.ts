import { RootState } from '../store';

export type LinksType = {
  id: number;
  text: string;
  path: string;
};

export type SingleRecipeType = {
  _id: number;
  name: string;
  description: string;
  image: string;
  numRatings: number;
  numReviews: number;
  averageRating: number;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  dishType: string;
  ingredients: string[];
  instructions: string[];
  equipment: string[];
  tips: string[];
  createdBy: {
    _id: string;
    name: string;
    lastName: string;
  };
  createdAt: Date;
};

export interface InitialFilterState {
  search: string;
  sort: string;
  cuisine: string[];
  cuisineOptions: MealOptionType[];
  dishType: string;
  tag: string;
  limit: number;
}

export type GetAllRecipesParams = {
  search?: string;
  sort?: string;
  cuisine?: string;
  dishType?: string;
  page?: number;
  limit?: number;
};

export type GetAllRecipesPayload = {
  recipes: SingleRecipeType[];
  totalRecipes: number;
  numOfPages: number;
};

export type MealOptionType = {
  id: number;
  text: string;
  isChecked: boolean;
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

export type ListItem = {
  id: number;
  listItem: number | string;
};

export type RecipeQuickLink = {
  id: number;
  text: string;
  path: string;
  icon: string;
};
