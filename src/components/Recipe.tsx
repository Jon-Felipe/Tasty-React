import { Link } from 'react-router-dom';

// components
import Star from './Star';

// extras
import foodImg from '../assets/hero-img.jpg';

type Props = {
  id: number;
  name: string;
  image: string;
  averageRating: number;
  numRatings: number;
  createdBy: string;
};

const Recipe = ({
  id,
  name,
  image,
  averageRating,
  numRatings,
  createdBy,
}: Props) => {
  return (
    <Link to={`/recipe/${id}`}>
      <article className='transition ease-out duration-300 hover:scale-105'>
        <img
          src={foodImg}
          alt={name}
          className='rounded-2xl w-full h-52 object-cover'
        />
        <div className='mt-1'>
          <h3 className='font-semibold text-lg capitalize'>{name}</h3>
          <div className='flex items-center justify-between mt-0.5'>
            <p className='text-sm text-orange-400 font-semibold'>
              By {createdBy}
            </p>
            <div className='flex items-center justify-center gap-1'>
              <Star value={averageRating} color='orange' />
              <p className='text-orange-400 text-sm font-semibold'>
                ({numRatings})
              </p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Recipe;
