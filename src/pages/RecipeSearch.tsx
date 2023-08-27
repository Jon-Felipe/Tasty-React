import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { getAllRecipes } from '../features/allRecipes/recipeSlice';
import RecipeCard from '../components/RecipeCard';

const RecipeSearch = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { recipes } = useSelector((state: RootState) => state.recipe);

  useEffect(() => {
    dispatch(getAllRecipes({ limit: 6 }));
  }, []);

  return (
    <section>
      <h1 className='text-5xl font-bold uppercase underline'>Recipe Search</h1>
      <section className='grid lg:grid-cols-[250px_1fr] mt-8'>
        <div>
          <h3 className='text-xl font-bold'>Filters</h3>
        </div>
        <section className='grid gap-y-6 md:gap-x-6 md:grid-cols-2 lg:grid-cols-3'>
          {recipes.map((recipe) => {
            return <RecipeCard key={recipe._id} recipe={recipe} />;
          })}
        </section>
      </section>
    </section>
  );
};

export default RecipeSearch;
