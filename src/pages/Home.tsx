import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowRight, FaFilter } from 'react-icons/fa';
import { AppDispatch, RootState } from '../store';
import { getAllRecipes } from '../features/allRecipes/recipeSlice';

// components
import Spinner from '../components/Spinner';
import FeaturedList from '../components/FeaturedList';

// extras
import { getFeaturedRecipes } from '../utils/helpers';

const Home = () => {
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
      {/* breakfast recipes list section */}
      <FeaturedList
        title='Favourite Breakfast Ideas'
        recipes={getFeaturedRecipes(recipes, 'dishType', 'breakfast')}
      />
      {/* challenging recipes list section */}
      <FeaturedList
        title='Fancy A Challenge'
        recipes={getFeaturedRecipes(recipes, 'difficulty', 'challenging')}
      />
      {/* italian recipes list section */}
      <FeaturedList
        title='Italian Recipes'
        recipes={getFeaturedRecipes(recipes, 'cuisine', 'italian')}
      />
      {/* dessert recipes list section */}
      <FeaturedList
        title='Delicious Desserts'
        recipes={getFeaturedRecipes(recipes, 'dishType', 'dessert')}
      />
      {/* asian recipes list section */}
      <FeaturedList
        title='Asian Recipes'
        recipes={getFeaturedRecipes(recipes, 'cuisine', 'asian')}
      />
    </>
  );
};

export default Home;
