import React from 'react';
import { useParams } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';

// extras
import { recipes } from '../utils/constants';
import foodImg from '../assets/hero-img.jpg';
import Star from '../components/Star';

type Props = {
  value: number;
};

const SingleRecipe = () => {
  const flexRow = 'flex items-center';

  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === Number(id));

  return (
    <article className='grid md:grid-cols-7 gap-4 lg:gap-12 max-w-screen-xl mx-auto'>
      <section className='md:col-span-5'>
        <div className='w-full overflow-hidden'>
          <img
            src={foodImg}
            alt={recipe?.text}
            className='w-full h-[450px] rounded-xl object-cover'
          />
        </div>
        <h1 className='text-xl font-bold mt-2'>{recipe?.text}</h1>
        <div className='flex flex-col md:flex-row-reverse md:items-center md:justify-between'>
          <section className={`${flexRow} justify-between md:gap-2 lg:gap-4`}>
            <div className='bg-orange-100 px-4 py-2 rounded-lg'>
              <p className='text-xs text-orange-500 font-medium'>
                {recipe?.reviews} reviews
              </p>
            </div>
            <div
              className={`${flexRow} gap-1 bg-orange-100 px-4 py-2 rounded-lg`}
            >
              <Star value={recipe?.averate_rating} />
              <p className='text-xs text-orange-500 font-medium'>
                {recipe?.averate_rating} ({recipe?.ratings})
              </p>
            </div>
            <div
              className={`${flexRow} justify-center bg-orange-100 rounded-full h-10 w-10`}
            >
              <HeartIcon className='w-5 h-5 text-orange-500' />
            </div>
          </section>
          <section
            className={`${flexRow} justify-between md:gap-2 lg:gap-4 mt-2`}
          >
            <div>
              <h3 className='text-sm font-bold'>{recipe?.author}</h3>
              <p className='text-xs text-orange-500'>Followers: 1561</p>
            </div>
            <button className='border-2 border-orange-500 text-orange-500 text-sm font-semibold rounded-xl px-4 py-1'>
              Follow
            </button>
          </section>
        </div>
        {/* recipe details */}
        <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4 mt-2 bg-orange-100 px-4 py-2 rounded-lg'>
          <div className='lg:border-r-2 lg:border-r-orange-500'>
            <h3 className='font-semibold text-orange-500'>Prep Time:</h3>
            <p className='text-sm font-medium capitalize'>
              {recipe?.recipe_details.prep_time} mins
            </p>
          </div>
          <div className='lg:border-r-2 lg:border-r-orange-500'>
            <h3 className='font-semibold text-orange-500'>Cook Time:</h3>
            <p className='text-sm font-medium capitalize'>
              {recipe?.recipe_details.cook_time} mins
            </p>
          </div>
          <div className='lg:border-r-2 lg:border-r-orange-500'>
            <h3 className='font-semibold text-orange-500'>Additional Time:</h3>
            <p className='text-sm font-medium capitalize'>
              {recipe?.recipe_details.additional_time} mins
            </p>
          </div>
          <div className='lg:border-r-2 lg:border-r-orange-500'>
            <h3 className='font-semibold text-orange-500'>Total Time:</h3>
            <p className='text-sm font-medium capitalize'>
              {recipe?.recipe_details.total_time}
            </p>
          </div>
          <div className='lg:border-r-2 lg:border-r-orange-500'>
            <h3 className='font-semibold text-orange-500'>Servings:</h3>
            <p className='text-sm font-medium capitalize'>
              {recipe?.recipe_details.servings}
            </p>
          </div>
          <div>
            <h3 className='font-semibold text-orange-500'>Difficulty:</h3>
            <p className='text-sm font-medium capitalize'>
              {recipe?.recipe_details.difficulty}
            </p>
          </div>
        </section>
        <section className=''>
          {/* nutritional facts */}
          <article className='bg-orange-100 px-6 py-4 rounded-lg mt-4 flex-1 h-fit'>
            <h1 className='text-3xl font-bold'>
              Nutrition Facts{' '}
              <span className='text-sm font-medium'>(per serving)</span>
            </h1>
            <div className='flex items-center justify-between bg-white px-6 py-2 rounded-lg mt-2'>
              <div>
                <h3 className='font-semibold'>
                  {recipe?.nutrition_facts.calories}g
                </h3>
                <p className='text-orange-500 font-bold'>Calories</p>
              </div>
              <div>
                <h3 className='font-semibold'>
                  {recipe?.nutrition_facts.fat}g
                </h3>
                <p className='text-orange-500 font-bold'>Fat</p>
              </div>
              <div>
                <h3 className='font-semibold'>
                  {recipe?.nutrition_facts.carbs}g
                </h3>
                <p className='text-orange-500 font-bold'>Carbs</p>
              </div>
              <div>
                <h3 className='font-semibold'>
                  {recipe?.nutrition_facts.protein}g
                </h3>
                <p className='text-orange-500 font-bold'>Protein</p>
              </div>
            </div>
          </article>
          {/* equipment */}
          <article className='bg-orange-100 px-6 py-4 rounded-lg mt-4'>
            <h1 className='text-3xl font-bold'>Equipment</h1>
            <ul>
              {recipe?.equipment.map((item, index) => (
                <li
                  key={index}
                  className='py-2 px-4 bg-white rounded-lg my-4 text-sm font-bold'
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
          {/* recipe tips */}
          <article className='bg-orange-100 px-6 py-4 rounded-lg mt-4'>
            <h1 className='text-3xl font-bold'>Recipe tips</h1>
            <ul>
              {recipe?.recipeTips.map((tip, index) => (
                <li
                  key={index}
                  className='py-2 px-4 bg-white rounded-lg my-4 text-sm font-bold'
                >
                  {tip}
                </li>
              ))}
            </ul>
          </article>
        </section>
      </section>
      <section className='md:col-span-2'>
        {/* Ingredients */}
        <article>
          <h1 className='text-center text-3xl font-bold'>Ingredients</h1>
          <ul className='mx-8'>
            {recipe?.ingredients.map((ingredient, i) => (
              <li
                key={i}
                className='text-sm font-semibold list-disc py-4 border-b-2 border-b-orange-500'
              >
                {ingredient}
              </li>
            ))}
          </ul>
        </article>
        {/* Directions */}
        <article className='mt-8'>
          <h1 className='text-center text-3xl font-bold'>Directions</h1>
          <ul>
            {recipe?.directions.map((direction, i) => (
              <li className='py-4'>
                <h2 className='font-bold text-lg'>Step {i + 1}</h2>
                <p>{direction}</p>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </article>
  );
};

export default SingleRecipe;
