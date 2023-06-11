import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { getAllRecipes } from '../../features/allRecipes/recipeSlice';

// components
import Spinner from '../UI/Spinner';
import Recipe from './Recipe';

const RecipeList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { isLoading, recipes } = useSelector(
    (state: RootState) => state.recipe
  );

  useEffect(() => {
    dispatch(getAllRecipes());
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {recipes.map((recipe) => {
        return (
          <Recipe
            key={recipe._id}
            id={recipe._id}
            text={recipe.name}
            image={recipe.image}
            averageRating={recipe.averageRating}
            createdBy={`${recipe.createdBy.name} ${recipe.createdBy.lastName}`}
          />
        );
      })}
    </section>
  );
};

export default RecipeList;
