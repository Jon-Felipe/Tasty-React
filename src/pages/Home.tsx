import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { getAllRecipes } from '../features/allRecipes/recipeSlice';

// components
import Search from '../components/UI/Search';
import Sort from '../components/UI/Sort';
import Accordion from '../components/UI/Accordion';
import RecipeList from '../components/RecipeList';
import Spinner from '../components/UI/Spinner';
import LinkCard from '../components/UI/LinkCard';
import NotFound from '../components/NotFound';

// extras
import {
  cuisineFilters,
  mealFilters,
  recipeCategories,
} from '../utils/constants';
import heroImg from '../assets/hero-img.jpg';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { isLoading, recipes, sort, cuisine } = useSelector(
    (state: RootState) => state.recipe
  );

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [sort]);

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
      {/* recipe categories */}
      <article>
        <h3 className='text-3xl font-bold text-orange-500 tracking-wide underline mb-4'>
          Popular Categories
        </h3>
        <div className='grid gap-y-4 md:grid-cols-2 lg:grid-cols-4 md:gap-4'>
          {recipeCategories.map((category) => (
            <LinkCard
              key={category.id}
              url={`/recipes/${category.text}`}
              text={`${category.text} recipes`}
            />
          ))}
        </div>
      </article>
      <article>
        <section className='grid md:grid-cols-[1fr_250px] gap-4 mb-8'>
          <Search />
          <Sort />
        </section>
        <article className='grid md:grid-cols-[200px_1fr] gap-10'>
          <section>
            <Accordion
              headerText='Cuisine'
              name='cuisine'
              checkedValue={cuisine}
              options={cuisineFilters}
            />
            {/* <Accordion headerText='Meals' name='meals' options={mealFilters} /> */}
          </section>
          <RecipeList recipes={recipes} />
        </article>
      </article>
    </div>
  );
};

export default Home;
