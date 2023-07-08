import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import {
  getAllRecipes,
  handleChange,
} from '../../features/allRecipes/recipeSlice';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Search = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { search } = useSelector((state: RootState) => state.recipe);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(getAllRecipes());
  };

  return (
    <form className='block w-full' onSubmit={handleOnSubmit}>
      <label
        htmlFor='search'
        className='mb-2 text-sm font-medium text-gray-900 sr-only'
      >
        Search
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <MagnifyingGlassIcon className='h-5 w-5 text-gray-500' />
        </div>
        <input
          type='search'
          id='search'
          name='search'
          value={search}
          onChange={handleOnChange}
          className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50'
          placeholder='Search Recipes...'
          required
        />
        <button
          type='submit'
          className='text-white absolute right-2.5 bottom-2.5 bg-orange-500 hover:bg-orange-400 font-medium rounded-lg text-sm px-4 py-2'
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
