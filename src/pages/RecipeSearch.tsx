import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { getAllRecipes } from '../features/allRecipes/recipeSlice';
import RecipeCard from '../components/RecipeCard';
import Search from '../components/Search';
import Accordion from '../components/Accordion';
import { cuisineTypes, dishTypes } from '../utils/constants';

const RecipeSearch = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { recipes } = useSelector((state: RootState) => state.recipe);

  useEffect(() => {
    dispatch(getAllRecipes({ limit: 6 }));
  }, []);

  return (
    <section>
      <h1 className='text-4xl font-bold uppercase underline'>Recipe Search</h1>
      <div className='grid lg:grid-cols-[350px_1fr] gap-y-4 lg:gap-x-4 mt-8'>
        <section className='space-y-4'>
          <Search
            value=''
            onChange={() => console.log('')}
            onSubmit={() => console.log('')}
          />
          <Accordion
            headerText='Cuisines'
            name='cuisines'
            checkedValue=''
            options={cuisineTypes}
          />
          <Accordion
            headerText='Dishes'
            name='dishType'
            checkedValue=''
            options={dishTypes}
          />
        </section>
        <section className='grid gap-y-6 md:gap-x-6 md:grid-cols-2 lg:grid-cols-3'>
          {recipes.map((recipe) => {
            return <RecipeCard key={recipe._id} recipe={recipe} />;
          })}
        </section>
      </div>
    </section>
  );
};

export default RecipeSearch;
