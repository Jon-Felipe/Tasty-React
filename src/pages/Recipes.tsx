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
import FormRowSelect from '../components/UI/FormRowSelect';
import { ListItem } from '../utils/types';

const limitList: ListItem[] = [
  { id: 1, listItem: 6 },
  { id: 2, listItem: 9 },
  { id: 3, listItem: 12 },
];

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
          <FormRowSelect
            labelText='Recipes Per Page:'
            name='limit'
            value={limit}
            onChange={handleOnChange}
            list={limitList}
          />
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
