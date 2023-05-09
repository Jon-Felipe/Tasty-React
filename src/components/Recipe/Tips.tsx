import React from 'react';

// components
import RecipeCard from './RecipeCard';

type Props = {
  tips: string[] | undefined;
};

const Tips = ({ tips }: Props) => {
  return (
    <RecipeCard className='w-full'>
      <h1 className='text-3xl font-bold'>Recipe tips</h1>
      <ul>
        {tips?.map((tip, index) => (
          <li
            key={index}
            className='py-2 px-4 bg-white rounded-lg my-4 text-sm font-bold'
          >
            {tip}
          </li>
        ))}
      </ul>
    </RecipeCard>
  );
};

export default Tips;
