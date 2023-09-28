import React from 'react';
import { ListItem } from '../utils/types';

type Props = {
  labelText: string;
  name: string;
  value: string | number | readonly string[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  list: ListItem[];
  required?: boolean;
};

const FormRowSelect = ({
  labelText,
  name,
  value,
  onChange,
  list,
  required,
}: Props) => {
  return (
    <div className='w-full'>
      <label
        htmlFor={name}
        className='block mb-2 text-sm font-medium text-gray-900'
      >
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className='border rounded-md p-2 cursor-pointer w-full capitalize'
        required={required}
      >
        {list.map(({ id, listItem }) => (
          <option key={id} value={listItem}>
            {listItem}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormRowSelect;
