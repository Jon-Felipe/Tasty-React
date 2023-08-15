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
  const { isLoading, recipes, totalRecipes, page } = useSelector(
    (state: RootState) => state.recipe
  );

  useEffect(() => {
    dispatch(getAllRecipes({ limit: 12, page }));
  }, [page]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <article>
      <header className='mb-10'>
        <h1 className='text-4xl font-bold uppercase'>Recipes</h1>
        <div className='w-[580px] my-2'>
          <p className='tracking-wide'>
            Browse over {totalRecipes} easy and delicious family friendly
            recipes! Dinner recipes, slow cooker recipes, vegetarian recipes,
            breakfast recipes and more.
          </p>
        </div>
        <button
          type='button'
          className='border rounded-md shadow px-4 py-2 font-semibold'
        >
          Go To Recipe Filter
        </button>
      </header>
      <RecipeList recipes={recipes} />
      <PageButtonContainer />
    </article>
  );
};

export default Recipes;
