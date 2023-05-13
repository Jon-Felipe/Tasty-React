import React from 'react';

type Props = {
  ingredients: string[] | undefined;
};

const Ingredients = ({ ingredients }: Props) => {
  return (
    <div>
      <h1 className='text-center text-3xl font-bold'>Ingredients</h1>
      <ul className='mx-8'>
        {ingredients?.map((ingredient, i) => (
          <li
            key={i}
            className='text-sm font-semibold list-disc py-4 border-b-2 border-b-orange-500'
          >
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;