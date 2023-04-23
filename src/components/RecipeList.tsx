import React from 'react';
import { RecipeType } from '../utils/types';
import Recipe from './Recipe';

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
