import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowRight, FaFilter } from 'react-icons/fa';
import { AppDispatch, RootState } from '../store';
import {
  clearFilters,
  getAllRecipes,
} from '../features/allRecipes/recipeSlice';

// components
import Spinner from '../components/Spinner';
import RecipeCard from '../components/RecipeCard';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { isLoading, recipes } = useSelector(
    (state: RootState) => state.recipe
  );

  useEffect(() => {
    dispatch(clearFilters());
    dispatch(getAllRecipes({ limit: 8 }));
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {/* hero section */}
      <section className='w-full md:w-3/4'>
        <h1 className='text-5xl text-orange-400 font-bold'>
          Delicious Dishes{' '}
          <span className='text-slate-700'>for Food Lovers</span>
        </h1>
        <p className='text-slate-700 my-4 tracking-tight'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nisi
          incidunt, odio ex repudiandae voluptas, unde sed voluptate est rerum
          necessitatibus. Enim dolorum id ipsa quae at atque omnis dignissimos
          praesentium rerum sed sit, alias ipsam consectetur, laborum rem,
          aperiam porro veniam consequatur vero voluptatem aliquam. Ducimus modi
          necessitatibus at.
        </p>
        <div className='flex items-center gap-x-4'>
          <Link
            to='recipes'
            className='flex items-center gap-x-2 bg-orange-400 border-2 border-orange-400 text-white font-semibold uppercase px-4 py-2 rounded-lg hover:bg-white hover:text-orange-400'
          >
            View more recipes
            <span>
              <FaArrowRight />
            </span>
          </Link>
          <Link
            to='recipe-search'
            className='flex items-center gap-x-2 border-2 border-slate-700 font-semibold uppercase px-4 py-2 rounded-lg hover:bg-slate-700 hover:text-white'
          >
            Browse by filters
            <span>
              <FaFilter />
            </span>
          </Link>
        </div>
      </section>
      {/* popular recipes section */}
      <section className='mt-6'>
        <h3 className='text-2xl md:text-4xl text-slate-800 font-bold mb-4 underline'>
          Browse Our Popular Recipes
        </h3>
        <div className='grid gap-y-6 md:gap-x-6 md:grid-cols-2 lg:grid-cols-4'>
          {recipes.map((recipe) => {
            return <RecipeCard key={recipe._id} recipe={recipe} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
