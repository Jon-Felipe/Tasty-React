import React from 'react';
import { useParams } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';

// extras
import { recipes } from '../utils/constants';
import foodImg from '../assets/hero-img.jpg';
import Star from '../components/Star';
import RecipeDetails from '../components/Recipe/RecipeDetails';
import NutritionFacts from '../components/Recipe/NutritionFacts';
import Equipment from '../components/Recipe/Equipment';
import Tips from '../components/Recipe/Tips';
import Ingredients from '../components/Recipe/Ingredients';
import Directions from '../components/Recipe/Directions';

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
        <RecipeDetails
          prep_time={recipe?.recipe_details.prep_time}
          cook_time={recipe?.recipe_details.cook_time}
          additional_time={recipe?.recipe_details.additional_time}
          total_time={recipe?.recipe_details.total_time}
          servings={recipe?.recipe_details.servings}
          difficulty={recipe?.recipe_details.difficulty}
        />
        <section>
          {/* nutritional facts */}
          <NutritionFacts
            calories={recipe?.nutrition_facts.calories}
            fat={recipe?.nutrition_facts.fat}
            carbs={recipe?.nutrition_facts.carbs}
            protein={recipe?.nutrition_facts.protein}
          />
          <div className='md:flex md:gap-x-4'>
            {/* equipment */}
            <Equipment equipment={recipe?.equipment} />
            {/* recipe tips */}
            <Tips tips={recipe?.recipeTips} />
          </div>
        </section>
      </section>
      <section className='md:col-span-2'>
        {/* Ingredients */}
        <Ingredients ingredients={recipe?.ingredients} />
        {/* Directions */}
        <Directions directions={recipe?.directions} />
      </section>
    </article>
  );
};

export default SingleRecipe;
