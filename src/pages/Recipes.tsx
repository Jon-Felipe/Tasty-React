import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { getAllRecipes } from '../features/allRecipes/recipeSlice';

// components
import RecipeList from '../components/RecipeList';
import Spinner from '../components/UI/Spinner';
import NotFound from '../components/NotFound';

const Recipes = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, recipes } = useSelector(
    (state: RootState) => state.recipe
  );

  useEffect(() => {
    dispatch(getAllRecipes());
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (recipes.length == 0) {
    return (
      <div className='mt-6'>
        <NotFound text='No Recipes Found' />
      </div>
    );
  }

  return (
    <article>
      <div className='mt-4'>
        <RecipeList recipes={recipes} />
      </div>
    </article>
  );
};

export default Recipes;
