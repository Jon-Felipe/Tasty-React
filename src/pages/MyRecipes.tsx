import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserRecipes } from '../features/allRecipes/recipeSlice';
import { AppDispatch, RootState } from '../store';

// components
import Spinner from '../components/UI/Spinner';
import RecipeList from '../components/RecipeList';
import Error from '../components/Error';

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
      <div className='mt-6'>
        <Error text='No Recipes Found' />
      </div>
    );
  }

  return (
    <div className='mt-6'>
      <RecipeList recipes={userRecipes} />
    </div>
  );
};

export default MyRecipes;
