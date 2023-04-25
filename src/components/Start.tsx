import { StarIcon } from '@heroicons/react/24/outline';
import React from 'react';

type Props = {
  value: number | undefined;
};

const Start = ({ value }: Props) => {
  return (
    <div className='flex items-center'>
      {[...Array(value)].map((start) => {
        return <StarIcon className='w-5 h-5 text-orange-500' />;
      })}
    </div>
  );
};

export default Start;
