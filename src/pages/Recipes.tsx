import React from 'react';
import { recipes } from '../utils/constants';
import Recipe from '../components/Recipe';

type Props = {};

const Recipes = (props: Props) => {
  return (
    <article>
      <h3>Explore Recipes</h3>
      {recipes.map((recipe) => {
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
    </article>
  );
};

export default Recipes;
