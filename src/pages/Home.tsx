import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import {
  getAllRecipes,
  getAllRecipesByCategory,
} from '../features/allRecipes/recipeSlice';

// components
import Spinner from '../components/Spinner';
import CategoryList from '../components/CategoryList';
import QuickLink from '../components/QuickLink';

// extras
import heroImg from '../assets/hero-img.jpg';
import { getRecipesByCategory } from '../utils/helpers';
import { recipesQuickLink } from '../utils/constants';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { isLoading, recipes } = useSelector(
    (state: RootState) => state.recipe
  );

  useEffect(() => {
    dispatch(getAllRecipes({ cuisine: ['European', 'African', 'Thai'] }));
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
      <section className='grid md:grid-cols-3 lg:grid-cols-9 gap-y-2 md:gap-4 lg:gap-y-0'>
        {recipesQuickLink.map(({ id, path, icon, text }) => (
          <QuickLink key={id} path={path} icon={icon} text={text} />
        ))}
      </section>
      {/* <QuickLinks /> */}
      {/* european recipes category list */}
      <CategoryList
        headerText='European'
        recipes={getRecipesByCategory(recipes, 'European')}
      />
      {/* african recipes category list */}
      <CategoryList
        headerText='African'
        recipes={getRecipesByCategory(recipes, 'African')}
      />
      {/* thai recipes category list */}
      <CategoryList
        headerText='Thai'
        recipes={getRecipesByCategory(recipes, 'Thai')}
      />
    </div>
  );
};

export default Home;
