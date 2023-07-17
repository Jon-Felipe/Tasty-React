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

  return <RecipeList recipes={recipes} />;
};

export default Recipes;
