import React from 'react';
import { ListItem } from '../../utils/types';

type Props = {
  labelText: string;
  name: string;
  value: string | number | readonly string[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  list: ListItem[];
};

const FormRowSelect = ({ labelText, name, value, onChange, list }: Props) => {
  return (
    <>
      <label
        htmlFor={name}
        className='block text-xl text-orange-500 font-medium mb-1'
      >
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className='w-full bg-orange-50 px-2 py-1.5 rounded-md cursor-pointer text-orange-500'
      >
        {list.map(({ id, listItem }) => (
          <option key={id} value={listItem}>
            {listItem}
          </option>
        ))}
      </select>
    </>
  );
};

export default FormRowSelect;
