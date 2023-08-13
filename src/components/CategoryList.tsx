import { SingleRecipeType } from '../utils/types';

// extras
import foodImg from '../assets/hero-img.jpg';

type Props = {
  headerText: string;
  recipes: SingleRecipeType[];
};

const CategoryList = ({ headerText, recipes }: Props) => {
  return (
    <section>
      <header className='flex relative overflow-hidden'>
        <h2 className='text-2xl font-bold uppercase mb-4 relative after:absolute after:h-1 after:w-screen after:bg-yellow-300 after:left-[calc(100%+_22px)] after:top-[calc(50%-_1.5px)]'>
          {headerText} Recipes
        </h2>
      </header>
      <article className='grid lg:grid-cols-4 gap-6'>
        {recipes.map((recipe) => (
          <div key={recipe._id}>
            <img src={foodImg} alt={recipe.name} />
            <h4 className='text-xl font-semibold uppercase'>{recipe.name}</h4>
          </div>
        ))}
      </article>
      <div className='mt-5'>
        <button className='border-2 border-black p-4 text-lg font-bold uppercase'>
          More {headerText} Recipes
        </button>
      </div>
    </section>
  );
};

export default CategoryList;
