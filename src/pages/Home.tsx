import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { getAllRecipesByCuisine } from '../features/allRecipes/recipeSlice';

// components
import Spinner from '../components/Spinner';
import QuickLinks from '../components/QuickLinks';
import CategoryList from '../components/CategoryList';

// extras
import heroImg from '../assets/hero-img.jpg';
import { getRecipesByCategory } from '../utils/helpers';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { isLoading, recipes } = useSelector(
    (state: RootState) => state.recipe
  );

  useEffect(() => {
    dispatch(getAllRecipesByCuisine(['European', 'African', 'Thai']));
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className='grid gap-6'>
      {/* hero */}
      <article className='relative'>
        <section className='h-52 lg:h-96 rounded-xl overflow-hidden'>
          <img
            src={heroImg}
            alt='hero image'
            className='w-full h-full object-cover'
          />
        </section>
        <section className='absolute top-2 lg:top-4 left-6 lg:left-6 w-2/4 lg:w-2/5'>
          <h3 className='text-lg lg:text-5xl text-white font-semibold capitalize'>
            Cook up a storm and take all the credit
          </h3>
          <p className='text-sm lg:text-2xl text-white lg:pt-2.5'>
            Over 500 recipes to enjoy
          </p>
        </section>
      </article>
      {/* recipes quick links */}
      <QuickLinks />
      {/* quick and easy category list */}
      <CategoryList
        headerText='Quick and Easy'
        recipes={getRecipesByCategory(recipes, 'Quick and Easy')}
      />
      {/* budget friendly category list */}
      <CategoryList
        headerText='Budget Friendly'
        recipes={getRecipesByCategory(recipes, 'Budget Friendly')}
      />
      {/* one pot dishes category list */}
      <CategoryList
        headerText='One Pot Dishes'
        recipes={getRecipesByCategory(recipes, 'One Pot Dishes')}
      />
      {/* slow cookers category list */}
      <CategoryList
        headerText='Slow Cookers'
        recipes={getRecipesByCategory(recipes, 'Slow Cookers')}
      />
    </div>
  );
};

export default Home;
