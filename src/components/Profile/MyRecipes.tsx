import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store';
import { getUserRecipes } from '../../features/allRecipes/recipeSlice';
import { RootState } from '../../store';

// components
import Spinner from '../UI/Spinner';
import Recipe from '../Recipe/Recipe';

const MyRecipes = () => {
  const { userRecipes, isLoading } = useSelector(
    (state: RootState) => state.recipe
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUserRecipes());
  }, []);

  if (isLoading) {
    return (
      <div className='flex items-center justify-center w-full'>
        <Spinner />
      </div>
    );
  }

  return (
    <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {userRecipes.map((recipe) => {
        return (
          <Recipe
            key={recipe._id}
            id={recipe._id}
            text={recipe.name}
            image={recipe.image}
            averageRating={recipe.averageRating}
            createdBy={`${recipe.createdBy.name} ${recipe.createdBy.lastName}`}
          />
        );
      })}
    </section>
  );
};

export default MyRecipes;
