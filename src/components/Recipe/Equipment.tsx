import React from 'react';

// components
import RecipeCard from './RecipeCard';

type Props = {
  equipment: string[] | undefined;
};

const Equipment = ({ equipment }: Props) => {
  return (
    <RecipeCard className='w-full'>
      <h1 className='text-3xl font-bold'>Equipment</h1>
      <ul>
        {equipment?.map((item, index) => (
          <li
            key={index}
            className='py-2 px-4 bg-white rounded-lg my-4 text-sm font-bold'
          >
            {item}
          </li>
        ))}
      </ul>
    </RecipeCard>
  );
};

export default Equipment;
