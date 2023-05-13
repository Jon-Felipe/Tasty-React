import React from 'react';

type Props = {
  recipeTips: string[] | undefined;
};

const Tips = ({ recipeTips }: Props) => {
  return (
    <article className='bg-orange-50 px-4 py-6 rounded-xl w-full'>
      <h3 className='text-2xl font-bold'>Recipe Tips</h3>
      <ul className='bg-white px-6 py-4 rounded-xl mt-4'>
        {recipeTips?.map((tip, index) => {
          return (
            <li key={index} className='list-disc mx-4'>
              {tip}
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default Tips;
