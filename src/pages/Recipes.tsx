import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { getRecipesByCategory } from '../features/allRecipes/recipeSlice';

// components
import RecipeList from '../components/RecipeList';
import Spinner from '../components/UI/Spinner';
import NotFound from '../components/NotFound';

const Recipes = () => {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, recipes } = useSelector(
    (state: RootState) => state.recipe
  );

  useEffect(() => {
    dispatch(getRecipesByCategory(params?.category!));
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
