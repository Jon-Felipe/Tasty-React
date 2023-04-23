import React from 'react';

// extras
import { FilterType } from '../utils/types';

type Props = {
  headerText: string;
  options: FilterType[];
};

const Accordion = ({ headerText, options }: Props) => {
  return (
    <div className='border-b-2 border-b-orange-100 mb-4'>
      <h3 className='text-2xl text-orange-500 font-semibold mb-4'>
        {headerText}
      </h3>
      {options.map((option: FilterType) => (
        <div key={option.id} className='flex items-center justify-between mb-4'>
          <label htmlFor='' className='capitalize font-medium'>
            {option.text}
          </label>
          <input type='checkbox' className='accent-orange-600' />
        </div>
      ))}
    </div>
  );
};

export default Accordion;
