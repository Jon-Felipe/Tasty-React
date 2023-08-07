import { Link } from 'react-router-dom';

// components
import Star from './Star';

// extras
import foodImg from '../assets/hero-img.jpg';

type Props = {
  id: number;
  text: string;
  image: string;
  averageRating: number;
  createdBy: string;
};

const Recipe = ({ id, text, image, averageRating, createdBy }: Props) => {
  return (
    <Link to={`/recipe/${id}`}>
      <article className='transition ease-out duration-300 hover:scale-105'>
        <img
          src={foodImg}
          alt={text}
          className='rounded-2xl w-full h-52 object-cover'
        />
        <div className='mt-1'>
          <h3 className='font-semibold text-lg capitalize'>{text}</h3>
          <div className='flex items-center justify-between mt-0.5'>
            <p className='text-sm text-orange-400 font-semibold'>
              By {createdBy}
            </p>
            <div className='flex items-center justify-center gap-1'>
              <Star value={averageRating} color='orange' />
              <p className='text-orange-400 text-sm font-semibold'>
                {averageRating}
              </p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Recipe;
