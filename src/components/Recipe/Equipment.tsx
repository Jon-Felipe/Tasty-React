import React from 'react';
import { RecipeType } from '../../utils/types';

type Props = {
  recipe: RecipeType | undefined;
};

const Equipment = ({ recipe }: Props) => {
  return (
    <article className='bg-orange-100 px-6 py-4 rounded-lg mt-4 w-full'>
      <h1 className='text-3xl font-bold'>Equipment</h1>
      <ul>
        {recipe?.equipment.map((item, index) => (
          <li
            key={index}
            className='py-2 px-4 bg-white rounded-lg my-4 text-sm font-bold'
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Equipment;
