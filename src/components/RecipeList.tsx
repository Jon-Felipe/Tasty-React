// components
import Recipe from './Recipe';

// extras
import { SingleRecipeType } from '../utils/types';

type Props = {
  recipes: SingleRecipeType[];
};

const RecipeList = ({ recipes }: Props) => {
  return (
    <section className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
      {recipes.map((recipe) => {
        return (
          <Recipe
            key={recipe._id}
            id={recipe._id}
            name={recipe.name}
            description={recipe.description}
            image={recipe.image}
            averageRating={recipe.averageRating}
            numRatings={recipe.numRatings}
            createdBy={`${recipe.createdBy.name} ${recipe.createdBy.lastName}`}
          />
        );
      })}
    </section>
  );
};

export default RecipeList;
