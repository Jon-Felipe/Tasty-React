import { SingleRecipeType } from '../utils/types';

type Props = {
  headerText: string;
  recipes: SingleRecipeType[];
};

const CategoryList = ({ headerText, recipes }: Props) => {
  return (
    <section>
      <h2>{headerText} Recipes</h2>
      {recipes.map((recipe) => (
        <article key={recipe._id}>
          <h4>{recipe.name}</h4>
        </article>
      ))}
    </section>
  );
};

export default CategoryList;
