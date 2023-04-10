import React from 'react';
import foodImg from '../assets/hero-img.jpg';

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
        <div>
          <p>{rating}</p>
          <span>{ratingAmt}</span>
        </div>
      </div>
    </article>
  );
};

export default Recipe;
