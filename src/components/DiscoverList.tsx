import { SingleRecipeType } from '../utils/types';
import Recipe from './Recipe';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  recipes: SingleRecipeType[];
};

const DiscoverList = ({ title, recipes }: Props) => {
  return (
    <article className='my-4'>
      <div className='flex items-end justify-between mb-2'>
        <h2 className='text-2xl font-bold mb-2 text-orange-500 underline'>
          {title}
        </h2>
        <Link to='/' className='text-orange-500 font-semibold text-lg'>
          View all
        </Link>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-y-0'>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe._id}
            id={recipe._id}
            text={recipe.name}
            image=''
            averageRating={recipe.averageRating}
            createdBy={`${recipe.createdBy.name} ${recipe.createdBy.lastName}`}
          />
        ))}
      </div>
    </article>
  );
};

export default DiscoverList;
