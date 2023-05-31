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
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          id={recipe.id}
          text={recipe.text}
          image={recipe.image}
          averageRating={recipe.averate_rating}
          author={recipe.author}
        />
      ))}
    </section>
  );
};

export default RecipeList;
