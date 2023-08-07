import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { AppDispatch, RootState } from '../store';
import {
  getAllRecipes,
  handleChange,
  resetPage,
  clearFilters,
} from '../features/allRecipes/recipeSlice';

// components
import RecipeList from '../components/RecipeList';
import Spinner from '../components/UI/Spinner';
import NotFound from '../components/NotFound';
import Search from '../components/UI/Search';
import Sort from '../components/UI/Sort';
import Accordion from '../components/UI/Accordion';

// extras
import { cuisineFilters, mealFilters } from '../utils/constants';
import PageButtonContainer from '../components/UI/PageButtonContainer';

const Recipes = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    isLoading,
    recipes,
    totalRecipes,
    search,
    sort,
    cuisine,
    mealType,
    page,
    limit,
  } = useSelector((state: RootState) => state.recipe);

  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const name = e.target.name;
    const value = name == 'limit' ? parseInt(e.target.value) : e.target.value;

    dispatch(handleChange({ name, value }));
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!search.trim()) {
      toast.error('Please provide a search value');
      return;
    }

    dispatch(resetPage());
    dispatch(getAllRecipes());
  };

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [sort, cuisine, mealType, page, limit]);

  return (
    <article>
      <h1 className='text-2xl font-semibold mb-3 text-orange-500'>
        Browsing All Recipes{' '}
        <span className='text-xs'>({totalRecipes} Recipes Found)</span>
      </h1>
      <section className='grid md:grid-cols-4 md:gap-x-4 md:items-center mb-4'>
        <div className='mb-2 md:mb-0 md:col-span-3'>
          <Search
            value={search}
            onChange={handleOnChange}
            onSubmit={handleOnSubmit}
          />
        </div>
        <div>
          <Sort value={sort} onChange={handleOnChange} />
        </div>
      </section>
      <article className='grid md:grid-cols-[200px_1fr] gap-10'>
        <section>
          <Accordion
            headerText='Cuisine'
            name='cuisine'
            checkedValue={cuisine}
            options={cuisineFilters}
          />
          <Accordion
            headerText='Meals'
            name='mealType'
            checkedValue={mealType}
            options={mealFilters}
          />
          <div>
            <label
              htmlFor='limit'
              className='block text-xl text-orange-500 font-medium mb-1'
            >
              Recipes Per Page:
            </label>
            <select
              name='limit'
              id='limit'
              value={limit}
              onChange={handleOnChange}
              className='w-full bg-orange-50 px-2 py-1.5 rounded-md cursor-pointer text-orange-500'
            >
              <option value={6}>6</option>
              <option value={9}>9</option>
              <option value={12}>12</option>
            </select>
          </div>
          <button
            type='button'
            onClick={() => dispatch(clearFilters())}
            className='bg-blue-500 text-white text-xs font-bold p-1.5 rounded-md mt-4'
          >
            Clear Filters
          </button>
        </section>
        {isLoading ? (
          <Spinner />
        ) : recipes.length == 0 ? (
          <div className='mt-6'>
            <NotFound text='No Recipes Found' />
          </div>
        ) : (
          <RecipeList recipes={recipes} />
        )}
      </article>
      <PageButtonContainer />
    </article>
  );
};

export default Recipes;
