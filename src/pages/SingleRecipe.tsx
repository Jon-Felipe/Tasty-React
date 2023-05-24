import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

// components
import Star from '../components/Star';
import RecipeDetails from '../components/Recipe/RecipeDetails';
import Equipment from '../components/Recipe/Equipment';
import RecipeTips from '../components/Recipe/RecipeTips';
import Ingredients from '../components/Recipe/Ingredients';
import Directions from '../components/Recipe/Directions';
import NutritionFacts from '../components/Recipe/NutritionFacts';

// extras
import { recipes } from '../utils/constants';
import foodImg from '../assets/hero-img.jpg';

type Props = {};

const SingleRecipe = () => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
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
              <Star value={recipe?.averate_rating!} color='orange' />
              <p className='text-xs font-bold text-orange-500'>
                ({recipe?.ratings})
              </p>
            </div>
            <button type='button' onClick={() => setIsFavourite(!isFavourite)}>
              {isFavourite ? (
                <HeartIconSolid className='w-5 h-5 text-orange-500' />
              ) : (
                <HeartIcon className='w-5 h-5 text-orange-500' />
              )}
            </button>
          </div>
        </section>
        <RecipeDetails
          prep_time={recipe?.recipe_details.prep_time}
          cook_time={recipe?.recipe_details.cook_time}
          total_time={recipe?.recipe_details.total_time}
          servings={recipe?.recipe_details.servings}
        />
        <section className='flex flex-col lg:flex-row gap-4 lg:gap-4 mt-4'>
          <RecipeTips recipeTips={recipe?.recipeTips} />
          <Equipment equipment={recipe?.equipment} />
        </section>
        <section className='mt-4'>
          <NutritionFacts nutritionFacts={recipe?.nutrition_facts!} />
        </section>
      </section>

      <section className='basis-1/3'>
        <Ingredients ingredients={recipe?.ingredients} />
        <Directions directions={recipe?.directions} />
      </section>
    </article>
  );
};

export default SingleRecipe;
