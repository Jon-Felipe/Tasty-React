import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import {
  clearFilters,
  getAllRecipes,
  handleChange,
} from '../features/allRecipes/recipeSlice';

// components
import RecipeCard from '../components/RecipeCard';
import Search from '../components/Search';
import Accordion from '../components/Accordion';
import Spinner from '../components/Spinner';

const RecipeSearch = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { recipes, search, cuisineOptions, dishTypeOptions, isLoading } =
    useSelector((state: RootState) => state.recipe);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    dispatch(handleChange({ name, value }));
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getAllRecipes({ search }));
  };

  useEffect(() => {
    dispatch(getAllRecipes({ limit: 9 }));
  }, [cuisineOptions, dishTypeOptions]);

  return (
    <section>
      <h1 className='text-4xl font-bold uppercase underline'>Recipe Search</h1>
      <div className='grid lg:grid-cols-[350px_1fr] gap-y-4 lg:gap-x-4 mt-8'>
        <section className='space-y-4'>
          <Search
            value={search}
            onChange={handleOnChange}
            onSubmit={handleOnSubmit}
          />
          <Accordion
            headerText='Dishes'
            type='checkbox'
            name='dishTypeOptions'
            options={dishTypeOptions}
            disabled={isLoading}
          />
          <Accordion
            headerText='Cuisines'
            type='checkbox'
            name='cuisineOptions'
            options={cuisineOptions}
            disabled={isLoading}
          />
          <button
            className='bg-white text-slate-700 border-2 border-slate-700 text-xs font-bold uppercase px-4 py-1.5 rounded-lg hover:bg-slate-700 hover:text-white'
            onClick={() => dispatch(clearFilters())}
          >
            Clear
          </button>
        </section>
        {isLoading ? (
          <Spinner />
        ) : (
          <section className='grid gap-y-6 md:gap-x-6 md:grid-cols-2 lg:grid-cols-3'>
            {recipes.map((recipe) => {
              return <RecipeCard key={recipe._id} recipe={recipe} />;
            })}
          </section>
        )}
      </div>
    </section>
  );
};

export default RecipeSearch;
