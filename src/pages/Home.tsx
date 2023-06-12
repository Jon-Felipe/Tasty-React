import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { getAllRecipes } from '../features/allRecipes/recipeSlice';

// components
import Hero from '../components/Home/Hero';
import RecipeCategories from '../components/Recipe/RecipeCategories';
import Search from '../components/UI/Search';
import Sort from '../components/UI/Sort';
import Accordion from '../components/UI/Accordion';
import RecipeList from '../components/Recipe/RecipeList';
import Spinner from '../components/UI/Spinner';

// extras
import {
  cuisineFilters,
  ingredientsFilters,
  mealsFilters,
} from '../utils/constants';

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
    <div className='max-w-screen-xl mx-auto grid gap-6'>
      <Hero />
      <RecipeCategories />
      <article>
        <section className='grid md:grid-cols-[1fr_250px] gap-4 mb-8'>
          <Search />
          <Sort />
        </section>
        <article className='grid md:grid-cols-[200px_1fr] gap-10'>
          <section>
            <Accordion headerText='Cuisine' options={cuisineFilters} />
            <Accordion headerText='Meals' options={mealsFilters} />
            <Accordion headerText='Ingredients' options={ingredientsFilters} />
          </section>
          <RecipeList recipes={recipes} />
        </article>
      </article>
    </div>
  );
};

export default Home;
