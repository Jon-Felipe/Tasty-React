import { useState } from 'react';

const Sort = () => {
  const [sortValue, setSortValue] = useState<string>('');

  const handleOnSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSortValue(value);
  };

  return (
    <select
      value={sortValue}
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
