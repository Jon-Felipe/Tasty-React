import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserRecipes } from '../features/allRecipes/recipeSlice';
import { AppDispatch, RootState } from '../store';

// components
import Spinner from '../components/UI/Spinner';
import RecipeList from '../components/RecipeList';
import NotFound from '../components/NotFound';
import Search from '../components/UI/Search';
import Sort from '../components/UI/Sort';

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
    <div className='my-6 space-y-4'>
      <div className='grid md:grid-cols-4 md:gap-x-4 md:items-center'>
        <div className='mb-2 md:mb-0 md:col-span-3'>
          <Search />
        </div>
        <div>
          <Sort />
        </div>
      </div>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default MyRecipes;
