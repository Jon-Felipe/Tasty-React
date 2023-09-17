type Props = {
  value: string | number | readonly string[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  disabled?: boolean;
};

const Sort = ({ value, onChange, disabled }: Props) => {
  return (
    <select
      name='sort'
      value={value}
      onChange={onChange}
      className='bg-orange-50 text-orange-500 text-sm rounded-full block w-full p-2.5 outline-none cursor-pointer'
      disabled={disabled}
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
