import React from 'react';
import { recipes } from '../utils/constants';
import { RecipeType } from '../utils/types';

// components
import Recipe from '../components/Recipe';

type Props = {};

const Recipes = (props: Props) => {
  return (
    <article>
      <h3 className='text-4xl font-semibold mb-4 underline'>Explore Recipes</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {recipes.map((recipe: RecipeType) => {
          return (
            <Recipe
              key={recipe.id}
              text={recipe.text}
              image={recipe.image}
              ratingAmt={recipe.ratings}
              reviews={recipe.reviews}
              description={recipe.description}
            />
          );
        })}
      </div>
    </article>
  );
};

export default Recipes;
