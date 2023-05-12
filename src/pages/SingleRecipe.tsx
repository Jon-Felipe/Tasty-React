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
    <div className='flex flex-col md:flex-row md:gap-x-4 lg:gap-x-8 max-w-screen-xl mx-auto'>
      <section className='md:basis-2/3 lg:basis-3/4'>
        <img
          src={foodImg}
          alt={recipe?.text}
          className='w-full object-cover rounded-lg max-h-[450px]'
        />
        <h3 className='text-xl md:text-2xl font-bold'>{recipe?.text}</h3>
        <article className='mt-2.5 px-4 md:px-0 md:flex md:items-center md:justify-between'>
          <section
            className={`${flexRow} justify-between mt-2.5 md:order-2 md:gap-x-2 lg:gap-x-4`}
          >
            <RecipeCard>
              <p className={textOrangeMedium}>{recipe?.reviews} reviews</p>
            </RecipeCard>
            <RecipeCard className={flexRow}>
              <Star value={recipe?.averate_rating} />
              <p className={textOrangeMedium}>({recipe?.ratings})</p>
            </RecipeCard>
            <button>
              <HeartIcon className='h-5 w-5 text-orange-500' />
            </button>
          </section>

          <section
            className={`${flexRow} justify-between mt-2.5 md:order-1 md:gap-x-2 lg:gap-x-4`}
          >
            <div>
              <h5 className='text-sm font-bold'>{recipe?.author}</h5>
              <p className={textOrangeMedium}>Followers: 1561</p>
            </div>
            <button className='border-2 border-orange-500 py-1 px-6 rounded-xl text-orange-500 font-semibold'>
              Follow
            </button>
          </section>
        </article>

        <article className='mt-2.5 px-4 md:px-0'>
          <RecipeDetails
            prep_time={recipe?.recipe_details.prep_time}
            cook_time={recipe?.recipe_details.cook_time}
            additional_time={recipe?.recipe_details.additional_time}
            total_time={recipe?.recipe_details.total_time}
            servings={recipe?.recipe_details.servings}
            difficulty={recipe?.recipe_details.difficulty}
          />
        </article>

        <article className='mt-2.5 px-4 md:px-0'>
          <NutritionFacts
            calories={recipe?.nutrition_facts.calories}
            fat={recipe?.nutrition_facts.fat}
            carbs={recipe?.nutrition_facts.carbs}
            protein={recipe?.nutrition_facts.protein}
          />
        </article>

        <section className='flex flex-col md:flex-row md:gap-x-2'>
          <article className='mt-2.5 px-4 md:px-0 flex-1'>
            <Equipment equipment={recipe?.equipment} />
          </article>
          <article className='mt-2.5 px-4 md:px-0 flex-1'>
            <Tips tips={recipe?.recipeTips} />
          </article>
        </section>
      </section>

      <section className='mt-2.5 md:mt-0 px-4 md:px-0 md:basis-1/3 lg:basis-1/4'>
        <Ingredients ingredients={recipe?.ingredients} />
        <Directions directions={recipe?.directions} />
      </section>
    </div>
  );
};

export default SingleRecipe;
