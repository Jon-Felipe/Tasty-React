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

  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === Number(id));

  return (
    <article className='flex flex-col md:flex-row gap-4 max-w-screen-xl mx-auto'>
      <section className='basis-2/3'>
        <img
          src={foodImg}
          alt={recipe?.text}
          className='w-full object-cover h-[400px] rounded-xl'
        />
        <section className='mt-2'>
          <h3 className='text-3xl font-semibold tracking-tighter'>
            {recipe?.text}
          </h3>
          <p className='text-sm font-normal'>{recipe?.description}</p>
        </section>
        <section className={`${flexRow} justify-between mt-2`}>
          <div className={`${flexRow} gap-x-4`}>
            <div>
              <h5 className='text-sm font-semibold'>{recipe?.author}</h5>
              <p className='text-xs font-semibold text-orange-500'>
                Followers: 1561
              </p>
            </div>
            <button className='border-2 border-orange-500 rounded-xl py-1 px-6 text-sm font-semibold text-orange-500'>
              Follow
            </button>
          </div>
          <div className={`${flexRow} gap-x-2.5`}>
            <div className={`${flexRow}`}>
              <Star value={recipe?.averate_rating} />
              <p className='text-xs font-bold text-orange-500'>
                ({recipe?.ratings})
              </p>
            </div>
            <button>
              <HeartIcon className='w-5 h-5 text-orange-500' />
            </button>
          </div>
        </section>
        <RecipeDetails
          prep_time={recipe?.recipe_details.prep_time}
          cook_time={recipe?.recipe_details.cook_time}
          total_time={recipe?.recipe_details.total_time}
          servings={recipe?.recipe_details.servings}
        />
      </section>

      <section className='basis-1/3'>
        <Ingredients ingredients={recipe?.ingredients} />
        <Directions directions={recipe?.directions} />
      </section>
    </article>
  );
};

export default SingleRecipe;
