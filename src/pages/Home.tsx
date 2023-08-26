import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { getAllRecipes } from '../features/allRecipes/recipeSlice';

// components
import Spinner from '../components/Spinner';

// extras
import heroImg from '../assets/hero-img.jpg';
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
      <section className='relative'>
        <article className='h-52 lg:h-96 rounded-xl overflow-hidden'>
          <img
            src={heroImg}
            alt='hero image'
            className='w-full h-full object-cover'
          />
        </article>
        <section className='absolute top-2 lg:top-4 left-6 lg:left-6 w-2/4 lg:w-2/5'>
          <h3 className='text-lg lg:text-5xl text-white font-semibold capitalize'>
            Cook up a storm and take all the credit
          </h3>
          <p className='text-sm lg:text-2xl text-white lg:pt-2.5'>
            Over 500 recipes to enjoy
          </p>
        </section>
      </section>
      <section className='grid gap-y-6 md:gap-x-6 md:grid-cols-2 lg:grid-cols-4 mt-6'>
        {recipes.map((recipe) => {
          return (
            <article key={recipe._id}>
              <img src={heroImg} alt={recipe.image} />
              <div className='mt-1'>
                <h3 className='text-2xl font-bold'>{recipe.name}</h3>
                <p className='text-sm tracking-tight'>
                  {recipe.description.slice(0, 80)}...
                </p>
              </div>
            </article>
          );
        })}
      </section>
      <PageButtonContainer />
    </>
  );
};

export default Home;
