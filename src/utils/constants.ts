import {
  MealOptionType,
  NavlinksType,
  RecipeCategoryType,
  RecipeType,
} from './types';

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
    text: 'desserts',
  },
  {
    id: 5,
    text: 'smoothies',
  },
  {
    id: 6,
    text: 'breakfast',
  },
  {
    id: 7,
    text: 'meaty',
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
      difficulty: 'easy',
    },
    ingredients: [
      '3 cups chopped tomatoes',
      '1 cup onion, diced',
      ' 1/2 cup chopped green bell pepper',
      '1/4 cup minced fresh cilantro',
      '2 tablespoons fresh lime juice',
      '1/2 teaspoon ground cumin',
      '1/2 teaspoon kosher salt',
      '1/2 teaspoon ground black pepper',
    ],
    directions: [
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nobis tempore amet odio animi, minima odit ab earum nisi blanditiis.',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nobis tempore amet odio animi, minima odit.',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    ],
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
      difficulty: 'hard',
    },
    ingredients: [
      '3 cups chopped tomatoes',
      '1 cup onion, diced',
      ' 1/2 cup chopped green bell pepper',
      '1/4 cup minced fresh cilantro',
      '2 tablespoons fresh lime juice',
      '1/2 teaspoon ground cumin',
      '1/2 teaspoon kosher salt',
      '1/2 teaspoon ground black pepper',
    ],
    directions: [
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nobis tempore amet odio animi, minima odit ab earum nisi blanditiis.',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nobis tempore amet odio animi, minima odit.',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    ],
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
      difficulty: 'medium',
    },
    ingredients: [
      '3 cups chopped tomatoes',
      '1 cup onion, diced',
      ' 1/2 cup chopped green bell pepper',
      '1/4 cup minced fresh cilantro',
      '2 tablespoons fresh lime juice',
      '1/2 teaspoon ground cumin',
      '1/2 teaspoon kosher salt',
      '1/2 teaspoon ground black pepper',
    ],
    directions: [
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nobis tempore amet odio animi, minima odit ab earum nisi blanditiis.',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nobis tempore amet odio animi, minima odit.',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    ],
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
      difficulty: 'easy',
    },
    ingredients: [
      '3 cups chopped tomatoes',
      '1 cup onion, diced',
      ' 1/2 cup chopped green bell pepper',
      '1/4 cup minced fresh cilantro',
      '2 tablespoons fresh lime juice',
      '1/2 teaspoon ground cumin',
      '1/2 teaspoon kosher salt',
      '1/2 teaspoon ground black pepper',
    ],
    directions: [
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nobis tempore amet odio animi, minima odit ab earum nisi blanditiis.',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nobis tempore amet odio animi, minima odit.',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    ],
    nutrition_facts: {
      calories: 155,
      fat: 10,
      carbs: 17,
      protein: 2,
    },
  },
  {
    id: 5,
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
      difficulty: 'medium',
    },
    ingredients: [
      '3 cups chopped tomatoes',
      '1 cup onion, diced',
      ' 1/2 cup chopped green bell pepper',
      '1/4 cup minced fresh cilantro',
      '2 tablespoons fresh lime juice',
      '1/2 teaspoon ground cumin',
      '1/2 teaspoon kosher salt',
      '1/2 teaspoon ground black pepper',
    ],
    directions: [
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nobis tempore amet odio animi, minima odit ab earum nisi blanditiis.',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nobis tempore amet odio animi, minima odit.',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    ],
    nutrition_facts: {
      calories: 155,
      fat: 10,
      carbs: 17,
      protein: 2,
    },
  },
  {
    id: 6,
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
      difficulty: 'easy',
    },
    ingredients: [
      '3 cups chopped tomatoes',
      '1 cup onion, diced',
      ' 1/2 cup chopped green bell pepper',
      '1/4 cup minced fresh cilantro',
      '2 tablespoons fresh lime juice',
      '1/2 teaspoon ground cumin',
      '1/2 teaspoon kosher salt',
      '1/2 teaspoon ground black pepper',
    ],
    directions: [
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nobis tempore amet odio animi, minima odit ab earum nisi blanditiis.',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nobis tempore amet odio animi, minima odit.',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    ],
    nutrition_facts: {
      calories: 155,
      fat: 10,
      carbs: 17,
      protein: 2,
    },
  },
  {
    id: 7,
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
      difficulty: 'hard',
    },
    ingredients: [
      '3 cups chopped tomatoes',
      '1 cup onion, diced',
      ' 1/2 cup chopped green bell pepper',
      '1/4 cup minced fresh cilantro',
      '2 tablespoons fresh lime juice',
      '1/2 teaspoon ground cumin',
      '1/2 teaspoon kosher salt',
      '1/2 teaspoon ground black pepper',
    ],
    directions: [
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nobis tempore amet odio animi, minima odit ab earum nisi blanditiis.',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nobis tempore amet odio animi, minima odit.',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    ],
    nutrition_facts: {
      calories: 155,
      fat: 10,
      carbs: 17,
      protein: 2,
    },
  },
  {
    id: 8,
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
      difficulty: 'easy',
    },
    ingredients: [
      '3 cups chopped tomatoes',
      '1 cup onion, diced',
      ' 1/2 cup chopped green bell pepper',
      '1/4 cup minced fresh cilantro',
      '2 tablespoons fresh lime juice',
      '1/2 teaspoon ground cumin',
      '1/2 teaspoon kosher salt',
      '1/2 teaspoon ground black pepper',
    ],
    directions: [
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nobis tempore amet odio animi, minima odit ab earum nisi blanditiis.',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nobis tempore amet odio animi, minima odit.',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    ],
    nutrition_facts: {
      calories: 155,
      fat: 10,
      carbs: 17,
      protein: 2,
    },
  },
];

export const cuisineFilters: MealOptionType[] = [
  {
    id: 1,
    text: 'asian',
  },
  {
    id: 2,
    text: 'mexican',
  },
  {
    id: 3,
    text: 'japan',
  },
  {
    id: 4,
    text: 'italian',
  },
  {
    id: 5,
    text: 'thai',
  },
];

export const mealsFilters: MealOptionType[] = [
  {
    id: 1,
    text: 'healthy',
  },
  {
    id: 2,
    text: 'lunch',
  },
  {
    id: 3,
    text: 'snacks',
  },
  {
    id: 4,
    text: 'salads',
  },
  {
    id: 5,
    text: 'desserts',
  },
];
