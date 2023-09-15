// components
import RecipeCard from './RecipeCard';
// extras
import { SingleRecipeType } from '../utils/types';

type Props = {
  title: string;
  recipes: SingleRecipeType[];
};

const FeaturedList = ({ title, recipes }: Props) => {
  return (
    <section className='mt-6'>
      <h3 className='text-2xl md:text-4xl text-slate-800 font-bold mb-4 underline'>
        {title}
      </h3>
      <div className='grid gap-y-6 md:gap-x-6 md:grid-cols-2 lg:grid-cols-4'>
        {recipes.map((recipe) => {
          return <RecipeCard key={recipe._id} recipe={recipe} />;
        })}
      </div>
    </section>
  );
};

export default FeaturedList;
