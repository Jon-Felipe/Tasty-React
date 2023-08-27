import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { getAllRecipes } from '../features/allRecipes/recipeSlice';

// components
import Spinner from '../components/Spinner';
import RecipeCard from '../components/RecipeCard';
import PageButtonContainer from '../components/PageButtonContainer';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { isLoading, recipes, page } = useSelector(
    (state: RootState) => state.recipe
  );

  useEffect(() => {
    dispatch(getAllRecipes({ limit: 12, page }));
  }, [page]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className='w-full md:w-3/4'>
        <h1 className='text-5xl text-orange-400 font-bold'>
          Delicious Dishes{' '}
          <span className='text-slate-700'>for Food Lovers</span>
        </h1>
        <p className='text-slate-700   my-4 tracking-tight'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nisi
          incidunt, odio ex repudiandae voluptas, unde sed voluptate est rerum
          necessitatibus. Enim dolorum id ipsa quae at atque omnis dignissimos
          praesentium rerum sed sit, alias ipsam consectetur, laborum rem,
          aperiam porro veniam consequatur vero voluptatem aliquam. Ducimus modi
          necessitatibus at.
        </p>
        <div className='flex items-center gap-x-4'>
          <button className='bg-orange-400 border-2 border-orange-400 text-white font-semibold uppercase px-4 py-2 rounded-lg hover:bg-white hover:text-orange-400'>
            View more recipes
          </button>
          <button className='border-2 border-slate-700 font-semibold uppercase px-4 py-2 rounded-lg hover:bg-slate-700 hover:text-white'>
            Browse by filters
          </button>
        </div>
      </section>
      <section className='grid gap-y-6 md:gap-x-6 md:grid-cols-2 lg:grid-cols-4 mt-6'>
        {recipes.map((recipe) => {
          return <RecipeCard key={recipe._id} recipe={recipe} />;
        })}
      </section>
      <PageButtonContainer />
    </>
  );
};

export default Home;
