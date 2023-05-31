import React from 'react';
import heroImg from '../assets/hero-img.jpg';
import {
  cuisineFilters,
  ingredientsFilters,
  mealsFilters,
  recipeCategories,
  recipes,
} from '../utils/constants';

// components
import Search from '../components/UI/Search';
import Sort from '../components/UI/Sort';
import Accordion from '../components/UI/Accordion';
import RecipeList from '../components/Recipe/RecipeList';
import RecipeCategories from '../components/Recipe/RecipeCategories';

type Props = {};

const Home = (props: Props) => {
  return (
    <div className='max-w-screen-xl mx-auto grid gap-6'>
      {/* hero section */}
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
      <RecipeCategories categories={recipeCategories} />

      {/* recipe filters and list of recipes */}
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
