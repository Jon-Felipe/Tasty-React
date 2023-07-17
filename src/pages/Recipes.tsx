import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { getRecipesByCategory } from '../features/allRecipes/recipeSlice';
import RecipeList from '../components/RecipeList';

type Props = {};

const Recipes = (props: Props) => {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { recipes } = useSelector((state: RootState) => state.recipe);

  useEffect(() => {
    dispatch(getRecipesByCategory(params?.category!));
  }, []);

  return (
    <article>
      <h1 className='text-4xl font-semibold underline capitalize'>
        {`${params.category} Recipes`}
      </h1>
      <div className='mt-4'>
        <RecipeList recipes={recipes} />
      </div>
    </article>
  );
};

export default Recipes;
