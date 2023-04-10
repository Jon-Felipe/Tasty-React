import React from 'react';
import foodImg from '../assets/hero-img.jpg';

// components
import StarRating from './StarRating';

type Props = {
  text: string;
  details: object;
  image: string;
  rating: number;
  ratingAmt: number;
};

const Recipe = ({ text, details, image, rating, ratingAmt }: Props) => {
  return (
    <article>
      <img src={foodImg} alt={text} />
      <div>
        <h3>{text}</h3>
        <div className='flex gap-2'>
          <StarRating rating={rating} />
          <p>{rating}</p>
        </div>
      </div>
    </article>
  );
};

export default Recipe;
