import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

type Props = {
  value: number | undefined;
  color?: string;
};

const Star = ({ value = 0, color }: Props) => {
  return (
    <div className='flex'>
      <span>
        <i>
          {value >= 1 ? (
            <FaStar color={color} />
          ) : value >= 0.5 ? (
            <FaStarHalfAlt color={color} />
          ) : (
            <FaRegStar color={color} />
          )}
        </i>
      </span>
      <span>
        <i>
          {value >= 2 ? (
            <FaStar color={color} />
          ) : value >= 1.5 ? (
            <FaStarHalfAlt color={color} />
          ) : (
            <FaRegStar color={color} />
          )}
        </i>
      </span>
      <span>
        <i>
          {value >= 3 ? (
            <FaStar color={color} />
          ) : value >= 2.5 ? (
            <FaStarHalfAlt color={color} />
          ) : (
            <FaRegStar color={color} />
          )}
        </i>
      </span>
      <span>
        <i>
          {value >= 4 ? (
            <FaStar color={color} />
          ) : value >= 3.5 ? (
            <FaStarHalfAlt color={color} />
          ) : (
            <FaRegStar color={color} />
          )}
        </i>
      </span>
      <span>
        <i>
          {value >= 5 ? (
            <FaStar color={color} />
          ) : value >= 4.5 ? (
            <FaStarHalfAlt color={color} />
          ) : (
            <FaRegStar color={color} />
          )}
        </i>
      </span>
    </div>

    // <div className='flex items-center'>
    //   {[...Array(value)].map((star) => {
    //     return <StarIcon className='w-5 h-5 text-orange-500' />;
    //   })}
    // </div>
  );
};

export default Star;
