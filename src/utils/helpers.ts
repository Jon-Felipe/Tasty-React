import { SingleRecipeType } from './types';

type StorageType = {
  key: string;
  value: string;
};

export const setToLocalStorage = ({ key, value }: StorageType) => {
  localStorage.setItem(key, value);
};

export const getFromLocalStorage = (key: string) => {
  const result = localStorage.getItem(key);
  const item = result ? JSON.parse(result) : null;
  return item;
};

export const removeFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export function getFeaturedRecipes(
  recipes: SingleRecipeType[],
  recipeFilterOption: string,
  recipeFilterValue: string
) {
  return recipes
    .filter(
      (recipe) =>
        recipe[recipeFilterOption as keyof typeof recipe] == recipeFilterValue
    )
    .slice(0, 8);
}
