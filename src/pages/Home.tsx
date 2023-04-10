import React from 'react';
import heroImg from '../assets/hero-img.jpg';
import { recipeCategories, recipes } from '../utils/constants';
import { RecipeCategoryType, RecipeType } from '../utils/types';

// components
import Search from '../components/Search';
import RecipeCategory from '../components/RecipeCategory';
import Recipe from '../components/Recipe';

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

      {/* intro text section */}
      <article>
        <h1 className='text-4xl text-red-500 font-bold uppercase'>Recipes</h1>
        <p className='mt-4'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
          aliquid distinctio tempora, culpa commodi ipsa consequatur voluptas
          repellat officia eligendi maxime porro aspernatur sapiente in unde ad,
          dolorum doloremque temporibus ea quam! Repellendus mollitia placeat
          laboriosam qui, provident assumenda. Vero.
        </p>
      </article>

      {/* search input */}
      <Search />

      {/* recipe categories */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {recipeCategories.map((category: RecipeCategoryType) => {
          return <RecipeCategory key={category.id} text={category.text} />;
        })}
      </div>

      {/* explore recipes */}
      <article>
        <h3 className='text-2xl font-semibold mb-4'>Explore Recipes</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {recipes.map((recipe: RecipeType) => {
            return (
              <Recipe
                key={recipe.id}
                text={recipe.text}
                image={recipe.image}
                avgRating={recipe.averate_rating}
                ratingAmt={recipe.ratings}
              />
            );
          })}
        </div>
      </article>
    </div>
  );
};

export default Home;
