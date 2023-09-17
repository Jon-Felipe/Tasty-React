import { MealOptionType, RecipeQuickLink } from './types';

// assets
import clockIcon from '../assets/icons/clock-icon.png';
import appetizerIcon from '../assets/icons/appetizer-icon.png';
import soupIcon from '../assets/icons/soup-icon.png';
import vegetarianIcon from '../assets/icons/vegetarian-icon.png';
import chickenIcon from '../assets/icons/chicken-icon.png';
import pastaIcon from '../assets/icons/pasta-icon.png';
import quickIcon from '../assets/icons/quick-icon.png';
import slowIcon from '../assets/icons/slow-icon.png';
import allIcon from '../assets/icons/all-icon.png';

export const cuisineOptions: MealOptionType[] = [
  { id: 1, text: 'african', isChecked: false },
  { id: 2, text: 'asian', isChecked: false },
  { id: 3, text: 'american', isChecked: false },
  { id: 4, text: 'british', isChecked: false },
  { id: 5, text: 'chinese', isChecked: false },
  { id: 6, text: 'european', isChecked: false },
  { id: 7, text: 'indian', isChecked: false },
  { id: 8, text: 'italian', isChecked: false },
  { id: 9, text: 'spanish', isChecked: false },
  { id: 10, text: 'thai', isChecked: false },
];

export const dishTypeOptions: MealOptionType[] = [
  { id: 1, text: 'breakfast', isChecked: false },
  { id: 2, text: 'lunch', isChecked: false },
  { id: 3, text: 'dinner', isChecked: false },
  { id: 4, text: 'dessert', isChecked: false },
];

export const recipesQuickLink: RecipeQuickLink[] = [
  {
    id: 1,
    text: '30 Minute Meals',
    path: 'category/30-minute-meals',
    icon: clockIcon,
  },
  {
    id: 2,
    text: 'Appetizers',
    path: 'category/appetizers',
    icon: appetizerIcon,
  },
  { id: 3, text: 'Soups', path: 'category/soups', icon: soupIcon },
  {
    id: 4,
    text: 'Vegetarian',
    path: 'category/vegetarian',
    icon: vegetarianIcon,
  },
  {
    id: 5,
    text: 'Chicken',
    path: 'category/chicken',
    icon: chickenIcon,
  },
  { id: 6, text: 'Pasta', path: 'category/pasta', icon: pastaIcon },
  { id: 7, text: 'Quick', path: 'category/quick', icon: quickIcon },
  { id: 8, text: 'Slow Cooker', path: 'category/slow-cooker', icon: slowIcon },
  { id: 9, text: 'Browse All', path: 'recipes', icon: allIcon },
];
