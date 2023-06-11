import { recipeCategories } from '../../utils/constants';
import LinkCard from '../UI/LinkCard';

const RecipeCategories = () => {
  return (
    <article>
      <h3 className='text-3xl font-bold text-orange-500 tracking-wide underline mb-4'>
        Popular Categories
      </h3>
      <div className='grid gap-y-4 md:grid-cols-2 lg:grid-cols-4 md:gap-4'>
        {recipeCategories.map((category) => (
          <LinkCard
            key={category.id}
            url={`/recipes/${category.text}`}
            text={`${category.text} recipes`}
          />
        ))}
      </div>
    </article>
  );
};

export default RecipeCategories;
