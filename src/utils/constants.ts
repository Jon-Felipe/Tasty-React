import { MealOptionType, LinksType, RecipeQuickLink } from './types';

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

export const recipesQuickLink: RecipeQuickLink[] = [
  {
    id: 1,
    text: '30 Minute Meals',
    path: '30-minute-meals',
    icon: 'clock-icon.png',
  },
  {
    id: 2,
    text: 'Appetizers',
    path: 'appetizers',
    icon: 'appetizers-icon.png',
  },
  { id: 3, text: 'Soups', path: 'soups', icon: 'soup-icon.png' },
  {
    id: 4,
    text: 'Vegetarian',
    path: 'Vegetarian',
    icon: 'vegetarian-icon.png',
  },
  { id: 5, text: 'Chicken', path: 'Chicken', icon: 'chicken-icon.png' },
  { id: 6, text: 'Pasta', path: 'pasta', icon: 'pasta-icon.png' },
  { id: 7, text: 'Quick', path: 'quick', icon: 'quick-icon.png' },
  { id: 8, text: 'Slow Cooker', path: 'slow-cooker', icon: 'slow-icon.png' },
];
