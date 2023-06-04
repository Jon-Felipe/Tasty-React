import React from 'react';

// components
import Recipe from './Recipe';

// extras
import { RecipeType } from '../../utils/types';

type Props = {
  recipes: RecipeType[];
};

const RecipeList = ({ recipes }: Props) => {
  return (
    <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {recipes.map((recipe) => {
        return (
          <Recipe
            key={recipe._id}
            id={recipe._id}
            text={recipe.name}
            image={recipe.image}
            averageRating={recipe.averageRating}
            author={recipe.author}
          />
        );
      })}
    </section>
  );
};

export default RecipeList;
