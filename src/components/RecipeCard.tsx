import { TbClock, TbChefHat, TbToolsKitchen } from 'react-icons/tb';

// extras
import { SingleRecipeType } from '../utils/types';
import heroImg from '../assets/hero-img.jpg';

type Props = {
  recipe: SingleRecipeType;
};

const RecipeCard = ({ recipe }: Props) => {
  return (
    <article key={recipe._id}>
      <img src={heroImg} alt={recipe.image} />
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
        <h3 className='text-2xl font-bold'>{recipe.name}</h3>
        <p className='text-sm tracking-tight'>
          {recipe.description.slice(0, 80)}...
        </p>
      </section>
    </article>
  );
};

export default RecipeCard;
