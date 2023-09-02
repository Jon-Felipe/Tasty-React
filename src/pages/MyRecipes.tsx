import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserRecipes,
  handleChange,
  resetPage,
} from '../features/allRecipes/recipeSlice';
import { AppDispatch, RootState } from '../store';
import { toast } from 'react-toastify';

// components
import Spinner from '../components/Spinner';
import Search from '../components/Search';
import Sort from '../components/Sort';
import PageButtonContainer from '../components/PageButtonContainer';
import RecipeCard from '../components/RecipeCard';

const MyRecipes = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, userRecipes, search, sort, page } = useSelector(
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

    dispatch(resetPage());
    dispatch(getUserRecipes());
  };

  useEffect(() => {
    dispatch(getUserRecipes());
  }, [sort, page]);

  return (
    <div className='my-6 space-y-4'>
      <div className='grid md:grid-cols-4 md:gap-x-4 md:items-center'>
        <div className='mb-2 md:mb-0 md:col-span-3'>
          <Search
            value={search}
            onChange={handleOnChange}
            onSubmit={handleOnSubmit}
            disabled={isLoading}
          />
        </div>
        <div>
          <Sort value={sort} onChange={handleOnChange} disabled={isLoading} />
        </div>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className='grid gap-y-6 md:gap-x-6 md:grid-cols-2 lg:grid-cols-3'>
          {userRecipes.map((recipe) => {
            return <RecipeCard key={recipe._id} recipe={recipe} />;
          })}
        </section>
      )}
      <PageButtonContainer />
    </div>
  );
};

export default MyRecipes;
