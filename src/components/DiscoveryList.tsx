import Recipe from './Recipe';
import { RecipeType } from '../utils/types';

// extras
import foodImg from '../assets/hero-img.jpg';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  recipes: RecipeType[];
};

const DiscoveryList = ({ title, recipes }: Props) => {
  return (
    <article>
      <div className='flex items-end justify-between'>
        <h2 className='text-2xl font-medium'>{title}</h2>
        <Link to='/' className='text-orange-500 font-semibold'>
          See all
        </Link>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 md:gap-5 lg:gap-y-0 my-2'>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe._id}
            id={recipe._id}
            text={recipe.name}
            image={foodImg}
            averageRating={recipe.averageRating}
            createdBy={`${recipe.createdBy.name} ${recipe.createdBy.lastName}`}
          />
        ))}
      </div>
    </article>
  );
};

export default DiscoveryList;
