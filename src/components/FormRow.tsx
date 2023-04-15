import React from 'react';

type Props = {
  type: React.HTMLInputTypeAttribute | undefined;
  name: string | undefined;
  value: string | number | readonly string[] | undefined;
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  labelText: string | undefined;
};

const FormRow = ({ type, name, value, handleChange, labelText }: Props) => {
  return (
    <div>
      <label htmlFor={name}>{labelText || name}</label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormRow;
