// components
import Hero from '../components/Home/Hero';
import RecipeCategories from '../components/Recipe/RecipeCategories';
import Search from '../components/UI/Search';
import Sort from '../components/UI/Sort';
import Accordion from '../components/UI/Accordion';
import RecipeList from '../components/Recipe/RecipeList';

// extras
import {
  cuisineFilters,
  ingredientsFilters,
  mealsFilters,
} from '../utils/constants';

const Home = () => {
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
          <RecipeList />
        </article>
      </article>
    </div>
  );
};

export default Home;
