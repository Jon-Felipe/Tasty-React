import React from 'react';

type Props = {
  directions: string[] | undefined;
};

const Directions = ({ directions }: Props) => {
  return (
    <div className='mt-8'>
      <h1 className='text-center text-3xl font-bold'>Directions</h1>
      <ul>
        {directions?.map((direction, i) => (
          <li className='py-4'>
            <h2 className='font-bold text-lg'>Step {i + 1}</h2>
            <p>{direction}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Directions;
