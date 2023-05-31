import React from 'react';

type Props = {
  type: React.HTMLInputTypeAttribute | undefined;
  name: string | undefined;
  value: string | number | readonly string[] | undefined;
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  labelText: string | undefined;
  placeholder: string | undefined;
  required: boolean | undefined;
};

const FormRow = ({
  type,
  name,
  value,
  handleChange,
  labelText,
  placeholder,
  required,
}: Props) => {
  return (
    <div>
      <label
        htmlFor={name}
        className='block mb-2 text-sm font-medium text-gray-900'
      >
        {labelText || name}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5'
      />
    </div>
  );
};

export default FormRow;
