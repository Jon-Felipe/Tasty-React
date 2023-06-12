import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store';
import { getUserRecipes } from '../../features/allRecipes/recipeSlice';
import { RootState } from '../../store';

// components
import Spinner from '../UI/Spinner';
import RecipeList from '../Recipe/RecipeList';

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

  return <RecipeList recipes={userRecipes} />;
};

export default MyRecipes;
