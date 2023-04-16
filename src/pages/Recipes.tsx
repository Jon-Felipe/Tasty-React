import React from 'react';
import { recipes } from '../utils/constants';
import { RecipeType } from '../utils/types';

// components
import Recipe from '../components/Recipe';
import Search from '../components/Search';

type Props = {};

const Recipes = (props: Props) => {
  return (
    <article className='max-w-screen-xl mx-auto grid gap-6'>
      <h3 className='text-5xl font-semibold mb-6 underline'>
        Explore Our Tasty Recipes
      </h3>
      {/* Fitlers */}
      <article>
        <h3 className='text-3xl font-semibold mb-4 underline'>Filters</h3>
        <Search />
      </article>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {recipes.map((recipe: RecipeType) => {
          return (
            <Recipe
              key={recipe.id}
              text={recipe.text}
              image={recipe.image}
              ratingAmt={recipe.ratings}
              reviews={recipe.reviews}
              description={recipe.description}
              cookTime={recipe.recipe_details.cook_time}
              difficulty={recipe.recipe_details.difficulty}
              serving={recipe.recipe_details.servings}
            />
          );
        })}
      </div>
    </article>
  );
};

export default Recipes;
