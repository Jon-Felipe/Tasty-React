import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { getRecipe } from '../features/allRecipes/recipeSlice';

// components
import Spinner from '../components/UI/Spinner';
import {
  RecipeInfo,
  RecipeCookingDetails,
  RecipeTips,
  RecipeEquipment,
  RecipeNutritionalFacts,
  RecipeIngredients,
  RecipeDirections,
} from '../components/SingleRecipe';

const SingleRecipe = () => {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, recipe } = useSelector((state: RootState) => state.recipe);

  useEffect(() => {
    dispatch(getRecipe(params.id!));
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <article className='flex flex-col md:flex-row gap-4 max-w-screen-xl mx-auto'>
      <section className='basis-2/3'>
        <RecipeInfo
          recipeName={recipe?.name!}
          recipeDescription={recipe?.description!}
          createdBy={`${recipe?.createdBy.name!} ${recipe?.createdBy
            .lastName!}`}
          averageRating={recipe?.averageRating!}
          numOfRatings={recipe?.numOfRatings!}
        />
        <RecipeCookingDetails
          prepTime={recipe?.recipeDetails?.prepTime!}
          cookTime={recipe?.recipeDetails?.cookTime!}
          totalTime={recipe?.recipeDetails?.totalTime!}
          servings={recipe?.recipeDetails?.servings!}
        />
        <section className='flex flex-col lg:flex-row gap-4 lg:gap-4 mt-4'>
          <RecipeTips tips={recipe?.recipeTips!} />
          <RecipeEquipment equipment={recipe?.equipment!} />
        </section>
        <RecipeNutritionalFacts
          calories={recipe?.nutritionFacts?.calories!}
          fat={recipe?.nutritionFacts?.fat!}
          carbs={recipe?.nutritionFacts?.carbs!}
          protein={recipe?.nutritionFacts?.protein!}
        />
      </section>
      <section className='basis-1/3'>
        <RecipeIngredients ingredients={recipe?.ingredients!} />
        <RecipeDirections directions={recipe?.directions!} />
      </section>
    </article>
  );
};

export default SingleRecipe;
