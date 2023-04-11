import React from 'react';
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';
import foodImg from '../assets/hero-img.jpg';

// components
import StarRating from './StarRating';

type Props = {
  text: string;
  image: string;
  avgRating: number;
  ratingAmt: number;
  reviews: number;
};

const Recipe = ({ text, image, avgRating, ratingAmt, reviews }: Props) => {
  return (
    <article className='border'>
      <img src={foodImg} alt={text} />
      <div className='pt-2 pb-10 px-4'>
        <h3 className='text-2xl font-semibold'>{text}</h3>
        <div className='flex items-center gap-3'>
          <div className='flex gap-2'>
            <StarRating rating={avgRating} />
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
        </div>
      </div>
    </article>
  );
};

export default Recipe;
