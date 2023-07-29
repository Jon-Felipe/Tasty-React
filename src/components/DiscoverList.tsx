import React from 'react';
import { SingleRecipeType } from '../utils/types';
import Recipe from './Recipe';

type Props = {
  title: string;
  recipes: SingleRecipeType[];
};

const DiscoverList = ({ title, recipes }: Props) => {
  return (
    <article>
      <h2>{title}</h2>
      {recipes.map((recipe) => (
        <Recipe
          id={recipe._id}
          text={recipe.name}
          image=''
          averageRating={recipe.averageRating}
          createdBy={`${recipe.createdBy.name} ${recipe.createdBy.lastName}`}
        />
      ))}
    </article>
  );
};

export default DiscoverList;
