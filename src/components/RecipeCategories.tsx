import React from 'react';
import { Link } from 'react-router-dom';
import { RecipeCategoryType } from '../utils/types';

type Props = {
  categories: RecipeCategoryType[];
};

const RecipeCategories = ({ categories }: Props) => {
  return (
    <article>
      <h3 className='text-3xl font-bold text-orange-500 tracking-wide underline mb-4'>
        Popular Categories
      </h3>
      <div className='grid gap-y-4 md:grid-cols-2 lg:grid-cols-4 md:gap-4'>
        {categories.map((category) => {
          return (
            <Link
              to={`recipes/${category.text}`}
              key={category.id}
              className='border-2 p-4 rounded capitalize text-sm font-semibold text-center transition duration-300 ease-in-out hover:scale-105'
            >
              {category.text} recipes
            </Link>
          );
        })}
      </div>
    </article>
  );
};

export default RecipeCategories;
