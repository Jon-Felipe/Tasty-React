import { MealOptionType, LinksType } from './types';

export const navLinks: LinksType[] = [
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

export const recipesQuickLink: LinksType[] = [
  { id: 1, text: '30 Minute Meals', path: '30-minute-meals' },
  { id: 2, text: 'Appetizers', path: 'appetizers' },
  { id: 3, text: 'Soups', path: 'soups' },
  { id: 4, text: 'Vegetarian', path: 'Vegetarian' },
  { id: 5, text: 'Chicken', path: 'Chicken' },
  { id: 6, text: 'Pasta', path: 'pasta' },
  { id: 7, text: 'Quick', path: 'quick' },
  { id: 8, text: 'Slow Cooker', path: 'slow-cooker' },
];
