import { NavlinksType, RecipeCategoryType, RecipeType } from './types';

export const navLinks: NavlinksType[] = [
  {
    id: 1,
    text: 'home',
    path: '/',
  },
  {
    id: 2,
    text: 'about',
    path: '/about',
  },
  {
    id: 3,
    text: 'your recipes',
    path: '/favourites',
  },
  {
    id: 4,
    text: 'contact',
    path: '/contact',
  },
];

export const recipeCategories: RecipeCategoryType[] = [
  {
    id: 1,
    text: 'breakfast recipes',
  },
  {
    id: 2,
    text: 'starters recipes',
  },
  {
    id: 3,
    text: 'side dish recipes',
  },
  {
    id: 4,
    text: 'light meal recipes',
  },
  {
    id: 5,
    text: 'main course recipes',
  },
  {
    id: 6,
    text: 'kids meals recipes',
  },
  {
    id: 7,
    text: 'dessert recipes',
  },
  {
    id: 8,
    text: 'baking recipes',
  },
  {
    id: 9,
    text: 'sweet & biscuit recipes',
  },
  {
    id: 10,
    text: 'beverage recipes',
  },
  {
    id: 11,
    text: 'occasion recipes',
  },
  {
    id: 12,
    text: 'classic recipes',
  },
];

export const recipes: RecipeType[] = [
  {
    id: 1,
    text: 'Seven Layer Bars',
    description:
      'These 7 layer bars are easy to make, and very rich. You can use different kinds of chips (vanilla or peanut butter) to suit your taste.',
    averate_rating: 3,
    ratings: 662,
    reviews: 483,
    author: 'P.Tindall',
    image: '',
    created_at: new Date('2023-03-25'),
    recipe_details: {
      prep_time: 15,
      cook_time: 25,
      additional_time: 20,
      total_time: 1,
      servings: 36,
      yield: '3 dozen bar cookies',
    },
    ingredients: ['', '', ''],
    directions: ['', '', ''],
    nutrition_facts: {
      calories: 155,
      fat: 10,
      carbs: 17,
      protein: 2,
    },
  },
  {
    id: 2,
    text: 'Seven Layer Bars',
    description:
      'These 7 layer bars are easy to make, and very rich. You can use different kinds of chips (vanilla or peanut butter) to suit your taste.',
    averate_rating: 3,
    ratings: 662,
    reviews: 483,
    author: 'P.Tindall',
    image: '',
    created_at: new Date('2023-03-25'),
    recipe_details: {
      prep_time: 15,
      cook_time: 25,
      additional_time: 20,
      total_time: 1,
      servings: 36,
      yield: '3 dozen bar cookies',
    },
    ingredients: ['', '', ''],
    directions: ['', '', ''],
    nutrition_facts: {
      calories: 155,
      fat: 10,
      carbs: 17,
      protein: 2,
    },
  },
  {
    id: 3,
    text: 'Seven Layer Bars',
    description:
      'These 7 layer bars are easy to make, and very rich. You can use different kinds of chips (vanilla or peanut butter) to suit your taste.',
    averate_rating: 3,
    ratings: 662,
    reviews: 483,
    author: 'P.Tindall',
    image: '',
    created_at: new Date('2023-03-25'),
    recipe_details: {
      prep_time: 15,
      cook_time: 25,
      additional_time: 20,
      total_time: 1,
      servings: 36,
      yield: '3 dozen bar cookies',
    },
    ingredients: ['', '', ''],
    directions: ['', '', ''],
    nutrition_facts: {
      calories: 155,
      fat: 10,
      carbs: 17,
      protein: 2,
    },
  },
  {
    id: 4,
    text: 'Seven Layer Bars',
    description:
      'These 7 layer bars are easy to make, and very rich. You can use different kinds of chips (vanilla or peanut butter) to suit your taste.',
    averate_rating: 3,
    ratings: 662,
    reviews: 483,
    author: 'P.Tindall',
    image: '',
    created_at: new Date('2023-03-25'),
    recipe_details: {
      prep_time: 15,
      cook_time: 25,
      additional_time: 20,
      total_time: 1,
      servings: 36,
      yield: '3 dozen bar cookies',
    },
    ingredients: ['', '', ''],
    directions: ['', '', ''],
    nutrition_facts: {
      calories: 155,
      fat: 10,
      carbs: 17,
      protein: 2,
    },
  },
];
