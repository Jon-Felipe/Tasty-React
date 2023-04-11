import React from 'react';
import {
  HeartIcon,
  HandThumbUpIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/react/24/outline';
import foodImg from '../assets/hero-img.jpg';

type Props = {
  text: string;
  image: string;
  ratingAmt: number;
  reviews: number;
  description: string;
};

const Recipe = ({ text, image, ratingAmt, reviews, description }: Props) => {
  return (
    <article className='shadow rounded-xl overflow-hidden'>
      <img src={foodImg} alt={text} />
      <section className='py-2 lg:py-4 px-4 lg:-x-8'>
        <header className='flex items-center justify-between'>
          <h3 className='text-3xl font-semibold'>{text}</h3>
          <button type='button'>
            <HeartIcon className='h-8 w-8 text-red-500' />
          </button>
        </header>
        <section className='flex items-center gap-3'>
          <div className='flex gap-2'>
            <HandThumbUpIcon className='h-5 w-6' />
            <p>
              {ratingAmt} <span className='font-semibold text-sm'>Ratings</span>
            </p>
          </div>
          <div className='flex items-center'>
            <ChatBubbleOvalLeftEllipsisIcon className='h-5 w-6' />
            <p>
              {reviews} <span className='font-semibold text-sm'>Comments</span>
            </p>
          </div>
        </section>
        <div className='py-2'>
          <p>{description}</p>
        </div>
        <button
          type='button'
          className='block w-full text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mt-3'
        >
          Get The Recipe
        </button>
      </section>
    </article>
  );
};

export default Recipe;
