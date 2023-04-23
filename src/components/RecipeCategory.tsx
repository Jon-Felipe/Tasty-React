import React from 'react';
import foodImg from '../assets/hero-img.jpg';

type Props = {
  text: string;
};

const RecipeCategory = ({ text }: Props) => {
  return (
    <div>
      <img
        src={foodImg}
        alt={text}
        className='w-32 h-32 object-cover rounded-full'
      />
      <h3 className='capitalize font-semibold text-center mt-2'>{text}</h3>
    </div>
  );
};

export default RecipeCategory;
