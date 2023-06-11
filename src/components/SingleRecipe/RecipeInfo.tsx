// components
import Star from '../UI/Star';

// assets
import foodImg from '../../assets/hero-img.jpg';
import { HeartIcon } from '@heroicons/react/24/outline';

type Props = {
  recipeName: string;
  recipeDescription: string;
  createdBy: string;
  averageRating: number;
  numOfRatings: number;
};

const RecipeInfo = ({
  recipeName,
  recipeDescription,
  createdBy,
  averageRating,
  numOfRatings,
}: Props) => {
  const flexRow = 'flex items-center';

  return (
    <div>
      <img
        src={foodImg}
        alt={recipeName}
        className='w-full object-cover h-[400px] rounded-xl'
      />
      <section className='mt-2'>
        <h3 className='text-3xl font-semibold tracking-tighter'>
          {recipeName}
        </h3>
        <p className='text-sm font-normal'>{recipeDescription}</p>
      </section>
      <section className={`${flexRow} justify-between mt-2`}>
        <div className={`${flexRow} gap-x-4`}>
          <div>
            <h5 className='text-sm font-semibold'>{createdBy}</h5>
            <p className='text-xs font-semibold text-orange-500'>
              Followers: 1561
            </p>
          </div>
          <button className='border-2 border-orange-500 rounded-xl py-1 px-6 text-sm font-semibold text-orange-500'>
            Follow
          </button>
        </div>
        <div className={`${flexRow} gap-x-2.5`}>
          <div className={`${flexRow} gap-x-1`}>
            <Star value={averageRating} color='orange' />
            <p className='text-xs font-bold text-orange-500'>
              ({numOfRatings})
            </p>
          </div>
          <button
            type='button'
            onClick={() => console.log('favourite')}
            className='transition duration-300 ease-in-out hover:scale-125'
          >
            <HeartIcon className='w-5 h-5 text-orange-500' />
          </button>
        </div>
      </section>
    </div>
  );
};

export default RecipeInfo;
