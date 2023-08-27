import { Link } from 'react-router-dom';
import { TbClock, TbChefHat, TbToolsKitchen } from 'react-icons/tb';

// extras
import { SingleRecipeType } from '../utils/types';
import heroImg from '../assets/hero-img.jpg';
import Star from './Star';

type Props = {
  recipe: SingleRecipeType;
};

const RecipeCard = ({ recipe }: Props) => {
  return (
    <article key={recipe._id}>
      <Link to={`recipe/${recipe._id}`}>
        <img src={heroImg} alt={recipe.image} />
      </Link>
      <section className='flex items-center gap-x-4 mt-2'>
        <div className='flex items-center gap-x-1'>
          <TbClock />
          <p className='text-sm font-thin'>
            {recipe.prepTime + recipe.cookTime} MIN
          </p>
        </div>
        <div className='flex items-center gap-x-1'>
          <TbChefHat />
          <p className='capitalize text-sm font-thin'>{recipe.difficulty}</p>
        </div>
        <div className='flex items-center gap-x-1'>
          <TbToolsKitchen />
          <p className='text-sm font-thin'>{recipe.servings}</p>
        </div>
      </section>
      <section>
        <h3 className='text-xl font-bold'>{recipe.name}</h3>
        <p className='text-sm tracking-tight'>
          {recipe.description.slice(0, 70)}...
        </p>
        <div className='flex items-center justify-between'>
          <h6 className='font-semibold'>
            {recipe.createdBy.name} {recipe.createdBy.lastName}
          </h6>
          <Star value={recipe.averageRating} color='orange' />
        </div>
      </section>
    </article>
  );
};

export default RecipeCard;
