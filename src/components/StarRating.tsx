import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

type Props = {
  rating: number;
};

const StarRating = ({ rating }: Props) => {
  return (
    <div className='flex'>
      {[...Array(rating)].map((start) => {
        return <StarIcon className='w-6 h-6 text-yellow-400' />;
      })}
    </div>
  );
};

export default StarRating;
