import React from 'react';
import { useParams } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';

// components
import Star from '../components/Star';
import RecipeDetails from '../components/Recipe/RecipeDetails';
import NutritionFacts from '../components/Recipe/NutritionFacts';
import Equipment from '../components/Recipe/Equipment';
import Tips from '../components/Recipe/Tips';
import Ingredients from '../components/Recipe/Ingredients';
import Directions from '../components/Recipe/Directions';
import RecipeCard from '../components/Recipe/RecipeCard';

// extras
import { recipes } from '../utils/constants';
import foodImg from '../assets/hero-img.jpg';

type Props = {};

const SingleRecipe = () => {
  const flexRow = 'flex items-center';
  const textOrangeMedium = 'text-xs text-orange-500 font-medium';

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
        <div className='my-2'>
          <h1 className='text-xl md:text-3xl font-bold'>{recipe?.text}</h1>
        </div>
        <div className='flex flex-col md:flex-row-reverse md:items-center md:justify-between'>
          <section className={`${flexRow} justify-between md:gap-2 lg:gap-4`}>
            <RecipeCard>
              <p className={textOrangeMedium}>{recipe?.reviews} reviews</p>
            </RecipeCard>
            <RecipeCard className={flexRow}>
              <Star value={recipe?.averate_rating} />
              <p className={textOrangeMedium}>
                {recipe?.averate_rating} ({recipe?.ratings})
              </p>
            </RecipeCard>
            <button onClick={() => console.log('added to favourite')}>
              <HeartIcon className='h-8 w-8 text-orange-500' />
            </button>
          </section>
          <section
            className={`${flexRow} justify-between md:gap-2 lg:gap-4 mt-2`}
          >
            <div>
              <h3 className='text-sm font-bold'>{recipe?.author}</h3>
              <p className={textOrangeMedium}>Followers: 1561</p>
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
