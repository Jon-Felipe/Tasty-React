import { SingleRecipeType } from '../utils/types';
import heroImg from '../assets/hero-img.jpg';

type Props = {
  recipe: SingleRecipeType;
};

const RecipeCard = ({ recipe }: Props) => {
  return (
    <article key={recipe._id}>
      <img src={heroImg} alt={recipe.image} />
      <div className='mt-1'>
        <h3 className='text-2xl font-bold'>{recipe.name}</h3>
        <p className='text-sm tracking-tight'>
          {recipe.description.slice(0, 80)}...
        </p>
      </div>
    </article>
  );
};

export default RecipeCard;
