import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// components
import Spinner from '../components/Spinner';
import RecipeList from '../components/RecipeList';
import PageButtonContainer from '../components/PageButtonContainer';

// extras
import { AppDispatch, RootState } from '../store';
import { getAllRecipes } from '../features/allRecipes/recipeSlice';
// import { cuisineTypes, dishTypes } from '../utils/constants';

const Category = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, recipes, page } = useSelector(
    (state: RootState) => state.recipe
  );

  // useEffect(() => {
  //   if (cuisineTypes.includes(id!)) {
  //     dispatch(getAllRecipes({ cuisine: [id!], limit: 6, page }));
  //   } else if (dishTypes.includes(id!)) {
  //     dispatch(getAllRecipes({ dishType: id, limit: 6, page }));
  //   }
  // }, [id, page]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <article>
      <h3 className='text-4xl font-semibold capitalize mb-8'>{id} Recipes</h3>
      <RecipeList recipes={recipes} />
      <PageButtonContainer />
    </article>
  );
};

export default Category;
