import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { getUserRecipes } from '../../features/allRecipes/recipeSlice';

type Props = {};

const MyRecipes = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUserRecipes());
  }, []);

  return <div>MyRecipes</div>;
};

export default MyRecipes;
