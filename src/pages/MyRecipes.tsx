import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserRecipes,
  handleChange,
} from '../features/allRecipes/recipeSlice';
import { AppDispatch, RootState } from '../store';
import { toast } from 'react-toastify';

// components
import Spinner from '../components/UI/Spinner';
import RecipeList from '../components/RecipeList';
import NotFound from '../components/NotFound';
import Search from '../components/UI/Search';
import Sort from '../components/UI/Sort';

const MyRecipes = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, recipes, search, sort } = useSelector(
    (state: RootState) => state.recipe
  );

  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;

    dispatch(handleChange({ name, value }));
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!search.trim()) {
      toast.error('Please provide a search value');
      return;
    }

    dispatch(getUserRecipes());
  };

  useEffect(() => {
    dispatch(getUserRecipes());
  }, [sort]);

  if (isLoading) {
    return <Spinner />;
  }

  if (recipes.length === 0) {
    return (
      <div className='mt-6'>
        <NotFound text='No Recipes Found' />
      </div>
    );
  }

  return (
    <div className='my-6 space-y-4'>
      <div className='grid md:grid-cols-4 md:gap-x-4 md:items-center'>
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
      </div>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default MyRecipes;
