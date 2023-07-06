import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserRecipes } from '../features/allRecipes/recipeSlice';
import { AppDispatch, RootState } from '../store';

// components
import Spinner from '../components/UI/Spinner';
import RecipeList from '../components/RecipeList';

const MyRecipes = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, userRecipes } = useSelector(
    (state: RootState) => state.recipe
  );

  useEffect(() => {
    dispatch(getUserRecipes());
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (userRecipes.length === 0) {
    return (
      <p className='text-xl font-semibold text-center my-8'>No recipes found</p>
    );
  }

  return (
    <div className='mt-6'>
      <RecipeList recipes={userRecipes} />
    </div>
  );
};

export default MyRecipes;
