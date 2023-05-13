import React from 'react';

type Props = {
  equipment: string[] | undefined;
};

const Equipment = ({ equipment }: Props) => {
  return (
    <article className='bg-orange-50 px-4 py-6 rounded-xl w-full'>
      <h3 className='text-2xl font-bold'>Equipment</h3>
      <ul className='grid grid-cols-2 gap-4 mt-4'>
        {equipment?.map((equipment, index) => {
          return (
            <li
              key={index}
              className='bg-white px-4 py-2.5 rounded-xl text-center font-semibold text-orange-500'
            >
              {equipment}
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default Equipment;
