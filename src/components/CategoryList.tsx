import { Link } from 'react-router-dom';

// extras
import { SingleRecipeType } from '../utils/types';
import foodImg from '../assets/hero-img.jpg';

type Props = {
  categoyTitle: string;
  recipes: SingleRecipeType[];
};

const CategoryList = ({ categoyTitle, recipes }: Props) => {
  return (
    <section>
      <header className='flex relative overflow-hidden'>
        <h2 className='text-2xl font-bold uppercase mb-4 relative after:absolute after:h-1 after:w-screen after:bg-yellow-300 after:left-[calc(100%+_22px)] after:top-[calc(50%-_1.5px)]'>
          {categoyTitle} Style Recipes
        </h2>
      </header>
      <article className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {recipes.map((recipe) => (
          <div key={recipe._id}>
            <img src={foodImg} alt={recipe.name} />
            <h4 className='text-xl font-semibold uppercase'>{recipe.name}</h4>
          </div>
        ))}
      </article>
      <div className='my-8'>
        <Link
          to={`/category/${categoyTitle}`}
          className='border-2 border-black p-4 text-lg font-bold uppercase'
        >
          More {categoyTitle} Recipes
        </Link>
      </div>
    </section>
  );
};

export default CategoryList;
