import React from 'react';

type Props = {};

const Sort = (props: Props) => {
  return (
    <select className='bg-orange-50 text-orange-500 text-sm rounded-full block w-full p-2.5 outline-none'>
      <option selected>Sort by</option>
      <option value='newest'>Newest</option>
      <option value='oldest'>Oldest</option>
    </select>
  );
};

export default Sort;
