import React from 'react';

type Props = {
  text: string;
};

const RecipeCategory = ({ text }: Props) => {
  return (
    <article className='border w-full px-3 py-6 hover:shadow-md'>
      <h3 className='text-sm text-gray-900 font-semibold capitalize tracking-wide'>
        {text}
      </h3>
    </article>
  );
};

export default RecipeCategory;
