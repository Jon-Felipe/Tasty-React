import { MealOptionType, NavlinksType, RecipeCategoryType } from './types';

export const navLinks: NavlinksType[] = [
  {
    id: 1,
    text: 'home',
    path: '/',
  },
  {
    id: 2,
    text: 'about',
    path: 'about',
  },
  {
    id: 3,
    text: 'recipes',
    path: 'recipes',
  },
  {
    id: 4,
    text: 'discover',
    path: 'discover',
  },
  {
    id: 5,
    text: 'contact',
    path: 'contact',
  },
];

export const recipeCategories: RecipeCategoryType[] = [
  {
    id: 1,
    text: 'pasta',
  },
  {
    id: 2,
    text: 'pizza',
  },
  {
    id: 3,
    text: 'vegan',
  },
  {
    id: 4,
    text: 'dessert',
  },
  {
    id: 5,
    text: 'smoothy',
  },
  {
    id: 6,
    text: 'breakfast',
  },
  {
    id: 7,
    text: 'meaty',
  },
  {
    id: 8,
    text: 'lamb',
  },
];

export const cuisineFilters: MealOptionType[] = [
  {
    id: 1,
    text: 'mediterranean',
  },
  {
    id: 2,
    text: 'european',
  },
  {
    id: 3,
    text: 'italian',
  },
  {
    id: 4,
    text: 'asian',
  },
  {
    id: 5,
    text: 'mexican',
  },
];

export const mealFilters: MealOptionType[] = [
  {
    id: 1,
    text: 'breakfast',
  },
  {
    id: 2,
    text: 'lunch',
  },
  {
    id: 3,
    text: 'dinner',
  },
  {
    id: 4,
    text: 'snack',
  },
];
