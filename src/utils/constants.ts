import { MealOptionType, NavlinksType } from './types';

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
    text: 'contact',
    path: 'contact',
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
