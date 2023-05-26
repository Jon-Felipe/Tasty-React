export type LoginType = {
  email: string;
  password: string;
};

export type RegisterType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

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

export type MyKnownError = {
  msg: string;
};
