import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { getAllRecipes } from '../features/allRecipes/recipeSlice';

// components
import RecipeList from '../components/RecipeList';
import Spinner from '../components/Spinner';

// extras
import PageButtonContainer from '../components/PageButtonContainer';

const Recipes = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, recipes, totalRecipes } = useSelector(
    (state: RootState) => state.recipe
  );

  useEffect(() => {
    dispatch(getAllRecipes({ limit: 12 }));
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <article>
      <h1 className='text-2xl font-semibold mb-3 text-orange-500'>
        Browsing All Recipes{' '}
        <span className='text-xs'>({totalRecipes} Recipes Found)</span>
      </h1>
      <RecipeList recipes={recipes} />
      <PageButtonContainer />
    </article>
  );
};

export default Recipes;
