import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { getAllRecipes } from '../features/allRecipes/recipeSlice';

// components
import Spinner from '../components/UI/Spinner';
import DiscoverList from '../components/DiscoverList';

// extras
import heroImg from '../assets/hero-img.jpg';
import { SingleRecipeType } from '../utils/types';

function getRecipesByTag(recipes: SingleRecipeType[], tag: string) {
  return recipes.filter((recipe) => recipe.tag == tag).slice(0, 4);
}

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
      <section>
        <DiscoverList
          title='Quick and Easy'
          recipes={getRecipesByTag(recipes, 'Quick and Easy')}
        />
        <DiscoverList
          title='One Pot Dishes'
          recipes={getRecipesByTag(recipes, 'One Pot Dishes')}
        />
        <DiscoverList
          title='Budget Friendly Bites'
          recipes={getRecipesByTag(recipes, 'Budget Friendly')}
        />
        <DiscoverList
          title='Slow Cookers'
          recipes={getRecipesByTag(recipes, 'Slow Cookers')}
        />
      </section>
    </div>
  );
};

export default Home;
