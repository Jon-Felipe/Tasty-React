import React from 'react';
import { useParams } from 'react-router-dom';
import { StarIcon, HeartIcon } from '@heroicons/react/24/outline';

// extras
import { recipes } from '../utils/constants';
import foodImg from '../assets/hero-img.jpg';
import Start from '../components/Start';

type Props = {
  value: number;
};

const SingleRecipe = () => {
  const flexRow = 'flex items-center';

  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === Number(id));

  return (
    <article className='grid md:grid-cols-7 gap-4 max-w-screen-xl mx-auto'>
      <section className='col-span-5'>
        <img
          src={foodImg}
          alt={recipe?.text}
          className='w-full h-2/3 object-cover rounded-lg'
        />
        <h1 className='text-xl font-bold mt-2'>{recipe?.text}</h1>
        <article className='flex flex-col md:flex-row md:justify-between'>
          <section
            className={`${flexRow} justify-between md:gap-2 md:order-2 mt-2.5`}
          >
            <div className='bg-orange-100 px-4 py-2 rounded-lg'>
              <p className='text-xs text-orange-500 font-medium'>
                {recipe?.reviews} reviews
              </p>
            </div>
            <div
              className={`${flexRow} gap-1 bg-orange-100 px-4 py-2 rounded-lg`}
            >
              <Start value={recipe?.averate_rating} />
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
          <section
            className={`${flexRow} justify-between md:gap-2 lg:order-1 mt-2.5`}
          >
            <div>
              <h3 className='text-sm font-bold'>{recipe?.author}</h3>
              <p className='text-xs text-orange-500'>Followers: 1561</p>
            </div>
            <button className='border-2 border-orange-500 text-orange-500 text-sm font-semibold rounded-xl px-4 py-1'>
              Follow
            </button>
          </section>
        </article>
      </section>
      <section className='col-span-2'>
        <h3>Ingredients</h3>
      </section>
    </article>
  );
};

export default SingleRecipe;
