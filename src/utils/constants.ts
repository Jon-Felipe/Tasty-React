import { MealOptionType, LinksType, RecipeQuickLink } from './types';

// assets
import clockIcon from '../assets/icons/clock-icon.png';
import appetizerIcon from '../assets/icons/appetizer-icon.png';
import soupIcon from '../assets/icons/soup-icon.png';
import vegetarianIcon from '../assets/icons/vegetarian-icon.png';
import chickenIcon from '../assets/icons/chicken-icon.png';
import pastaIcon from '../assets/icons/pasta-icon.png';
import quickIcon from '../assets/icons/quick-icon.png';
import slowIcon from '../assets/icons/slow-icon.png';

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
    icon: clockIcon,
  },
  {
    id: 2,
    text: 'Appetizers',
    path: 'appetizers',
    icon: appetizerIcon,
  },
  { id: 3, text: 'Soups', path: 'soups', icon: soupIcon },
  {
    id: 4,
    text: 'Vegetarian',
    path: 'Vegetarian',
    icon: vegetarianIcon,
  },
  {
    id: 5,
    text: 'Chicken',
    path: 'Chicken',
    icon: chickenIcon,
  },
  { id: 6, text: 'Pasta', path: 'pasta', icon: pastaIcon },
  { id: 7, text: 'Quick', path: 'quick', icon: quickIcon },
  { id: 8, text: 'Slow Cooker', path: 'slow-cooker', icon: slowIcon },
];
