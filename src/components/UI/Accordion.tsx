import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

// extras
import { MealOptionType } from '../../utils/types';
import { AppDispatch } from '../../store';
import { handleChange } from '../../features/allRecipes/recipeSlice';

type Props = {
  headerText: string;
  name: string;
  checkedValue: string;
  options: MealOptionType[];
};

const Accordion = ({ headerText, name, checkedValue, options }: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    dispatch(handleChange({ name, value }));
  };

  const AccordionOptions = () => {
    return (
      <>
        {isVisible && (
          <>
            {options.map((option: MealOptionType) => (
              <div
                key={option.id}
                className='flex items-center justify-between mb-4'
              >
                <label className='capitalize font-medium'>{option.text}</label>
                <input
                  type='checkbox'
                  name={name}
                  value={option.text}
                  onChange={handleOnChange}
                  checked={option.text === checkedValue}
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
