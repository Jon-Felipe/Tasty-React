import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserRecipes } from '../features/allRecipes/recipeSlice';
import { AppDispatch, RootState } from '../store';

// components
import Spinner from '../components/UI/Spinner';
import RecipeList from '../components/RecipeList';
import NotFound from '../components/NotFound';

const MyRecipes = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, recipes } = useSelector(
    (state: RootState) => state.recipe
  );

  useEffect(() => {
    dispatch(getUserRecipes());
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (recipes.length === 0) {
    return (
      <div className='mt-6'>
        <NotFound text='No Recipes Found' />
      </div>
    );
  }

  return (
    <div className='mt-6'>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default MyRecipes;
