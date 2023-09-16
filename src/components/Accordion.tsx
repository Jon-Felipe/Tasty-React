import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

// extras
import { MealOptionType } from '../utils/types';

type Props = {
  headerText: string;
  type: React.HTMLInputTypeAttribute;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  options: MealOptionType[];
  disabled?: boolean;
};

const Accordion = ({
  headerText,
  type,
  name,
  onChange,
  options,
  disabled,
}: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const AccordionOptions = () => {
    return (
      <>
        {isVisible && (
          <>
            {options.map((option: MealOptionType) => (
              <div
                key={option.id}
                className='flex items-center justify-between mb-1'
              >
                <label className='capitalize font-medium'>{option.text}</label>
                <input
                  type={type}
                  name={name}
                  value={option.text}
                  onChange={onChange}
                  checked={option.isChecked}
                  disabled={disabled}
                  className='accent-orange-600'
                />
              </div>
            ))}
          </>
        )}
      </>
    );
  };

  return (
    <div className='border-b-2 border-b-orange-100 mb-4'>
      <div
        className='flex items-center justify-between cursor-pointer'
        onClick={() => setIsVisible(!isVisible)}
      >
        <h3 className='text-2xl text-orange-500 font-semibold mb-4'>
          {headerText}
        </h3>
        {isVisible ? (
          <ChevronDownIcon className='h-5 w-5 text-orange-500' />
        ) : (
          <ChevronUpIcon className='h-5 w-5 text-orange-500' />
        )}
      </div>
      <AccordionOptions />
    </div>
  );
};

export default Accordion;
