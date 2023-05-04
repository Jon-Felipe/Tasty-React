import React from 'react';

type Props = {
  tips: string[] | undefined;
};

const Tips = ({ tips }: Props) => {
  return (
    <article className='bg-orange-100 px-6 py-4 rounded-lg mt-4 w-full'>
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
    </article>
  );
};

export default Tips;
