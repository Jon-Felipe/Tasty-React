import React from 'react';
import foodImg from '../assets/hero-img.jpg';

// components
import StarRating from './StarRating';

type Props = {
  text: string;
  image: string;
  rating: number;
};

const Recipe = ({ text, image, rating }: Props) => {
  return (
    <article>
      <img src={foodImg} alt={text} />
      <div>
        <h3 className='text-xl font-semibold mb-2'>{text}</h3>
        <div className='flex gap-2'>
          <StarRating rating={rating} />
          <p>{rating}</p>
        </div>
      </div>
    </article>
  );
};

export default Recipe;
