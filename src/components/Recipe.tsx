import React from 'react';
import { StarIcon } from '@heroicons/react/24/outline';
import foodImg from '../assets/hero-img.jpg';

type Props = {
  text: string;
  image: string;
  averageRating: number;
  author: string;
};

const Recipe = ({ text, image, averageRating, author }: Props) => {
  return (
    <article>
      <img
        src={foodImg}
        alt={text}
        className='rounded-2xl w-full h-52 object-cover'
      />
      <div className='mt-1'>
        <h3 className='font-semibold text-lg'>{text}</h3>
        <div className='flex items-center justify-between mt-0.5'>
          <p className='text-sm text-orange-400 font-semibold'>By {author}</p>
          <div className='flex items-center justify-center gap-1'>
            <StarIcon className='w-4 h-4 text-orange-400' />
            <p className='text-orange-400 text-sm font-semibold'>
              {averageRating}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Recipe;
