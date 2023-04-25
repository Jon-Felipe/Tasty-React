import React from 'react';
import { useParams } from 'react-router-dom';
import { StarIcon, HeartIcon } from '@heroicons/react/24/outline';

// extras
import { recipes } from '../utils/constants';
import foodImg from '../assets/hero-img.jpg';

type Props = {
  value: number;
};

const SingleRecipe = () => {
  const flexRow = 'flex items-center';

  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === Number(id));

  return (
    <article className='grid lg:grid-cols-5'>
      <section className='col-start-1 col-end-4'>
        <img src={foodImg} alt={recipe?.text} />
        <h1 className='text-xl font-bold mt-4 tracking px-6 lg:px-0'>
          {recipe?.text}
        </h1>
        <article className='flex flex-col lg:flex-row px-6 lg:px-0 lg:justify-between'>
          <section className={`${flexRow} justify-between py-2 lg:order-2`}>
            <div className='bg-orange-100 px-4 py-2 rounded-lg'>
              <p className='text-xs text-orange-500 font-medium'>
                {recipe?.reviews} reviews
              </p>
            </div>
            <div
              className={`${flexRow} gap-1 bg-orange-100 px-4 py-2 rounded-lg`}
            >
              <div className={`${flexRow}`}>
                <StarIcon className='w-3.5 h-3.w-3.5 text-orange-500' />
                <StarIcon className='w-3.5 h-3.w-3.5 text-orange-500' />
                <StarIcon className='w-3.5 h-3.w-3.5 text-orange-500' />
                <StarIcon className='w-3.5 h-3.w-3.5 text-orange-500' />
                <StarIcon className='w-3.5 h-3.w-3.5 text-orange-500' />
              </div>
              <p className='text-xs text-orange-500 font-medium'>
                {recipe?.averate_rating}
              </p>
              <p className='text-xs text-orange-500 font-medium'>
                ({recipe?.ratings})
              </p>
            </div>
            <div
              className={`${flexRow} justify-center bg-orange-100 rounded-full h-10 w-10`}
            >
              <HeartIcon className='w-5 h-5 text-orange-500' />
            </div>
          </section>
          <section className={`${flexRow} justify-between lg:order-1`}>
            <div>
              <h3 className='text-sm font-bold'>{recipe?.author}</h3>
              <p className='text-xs text-orange-500'>Followers: 1561</p>
            </div>
            <button className='border-2 border-orange-500 text-orange-500 text-lg font-semibold rounded-2xl px-4 py-1'>
              Follow
            </button>
          </section>
        </article>
      </section>
    </article>
  );
};

export default SingleRecipe;
