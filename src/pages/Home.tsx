import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { getAllRecipes } from '../features/allRecipes/recipeSlice';

// components
import RecipeList from '../components/RecipeList';
import Spinner from '../components/UI/Spinner';

// extras
import heroImg from '../assets/hero-img.jpg';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { isLoading, recipes } = useSelector(
    (state: RootState) => state.recipe
  );

  useEffect(() => {
    dispatch(getAllRecipes());
  }, []);

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
      <article>
        {isLoading ? (
          <Spinner />
        ) : (
          <div>
            <h3 className='text-3xl font-bold text-orange-500 underline mb-4'>
              Featured Recipes
            </h3>
            <RecipeList recipes={recipes} />
          </div>
        )}
      </article>
    </div>
  );
};

export default Home;
