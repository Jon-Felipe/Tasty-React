import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { handleChange } from '../../features/allRecipes/recipeSlice';

const Sort = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { sort } = useSelector((state: RootState) => state.recipe);

  const handleOnSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  return (
    <select
      name='sort'
      value={sort}
      onChange={handleOnSortChange}
      className='bg-orange-50 text-orange-500 text-sm rounded-full block w-full p-2.5 outline-none'
    >
      <option value='' disabled>
        Sort By:
      </option>
      <option value='latest'>Latest</option>
      <option value='oldest'>Oldest</option>
      <option value='a-z'>Name: A-Z</option>
      <option value='z-a'>Name: Z-A</option>
    </select>
  );
};

export default Sort;
