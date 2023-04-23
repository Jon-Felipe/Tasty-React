import React from 'react';
import heroImg from '../assets/hero-img.jpg';
import { recipeCategories, recipes } from '../utils/constants';
import { RecipeCategoryType, RecipeType } from '../utils/types';

// components
import Search from '../components/Search';
import Sort from '../components/Sort';
import RecipeCategory from '../components/RecipeCategory';
import Recipe from '../components/Recipe';
import Filters from '../components/Filters';

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
      <article>
        <h3 className='text-2xl font-bold mb-4'>Popular Categories</h3>
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 place-items-start gap-2'>
          {recipeCategories.map((category: RecipeCategoryType) => {
            return <RecipeCategory key={category.id} text={category.text} />;
          })}
        </div>
      </article>

      <article className='flex flex-col gap-4'>
        {/* search input */}
        <Search />
        {/* sort recipes */}
        <Sort />
      </article>

      {/* recipe content */}
      <article>
        {/* recipe filters */}
        {/* <section>
          <Filters />
        </section> */}

        {/* recipes */}
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {recipes.map((recipe: RecipeType) => {
            return (
              <Recipe
                key={recipe.id}
                text={recipe.text}
                image={recipe.image}
                averageRating={recipe.averate_rating}
                author={recipe.author}
              />
            );
          })}
        </section>
      </article>
    </div>
  );
};

export default Home;
