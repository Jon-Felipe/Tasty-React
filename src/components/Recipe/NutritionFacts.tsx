import React from 'react';

type Props = {
  nutritionFacts: {
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
  };
};

type NutritionalFactsType = {
  nutriValue: string | number;
  nutriText: string;
};

const NutritionFacts = ({ nutritionFacts }: Props) => {
  const NutritionalItem = ({ nutriValue, nutriText }: NutritionalFactsType) => {
    return (
      <div>
        <h3 className='font-bold'>{nutriValue}</h3>
        <p className='text-orange-500 font-medium'>{nutriText}</p>
      </div>
    );
  };

  return (
    <article className='bg-orange-50 rounded-xl py-4 px-8'>
      <h3 className='text-2xl font-bold'>
        Nutritional Facts{' '}
        <span className='text-sm font-medium'>(per serving)</span>
      </h3>
      <div className='flex items-center justify-between bg-white px-6 py-2 rounded-xl mt-2'>
        <NutritionalItem
          nutriValue={nutritionFacts.calories}
          nutriText='Calories'
        />
        <NutritionalItem
          nutriValue={`${nutritionFacts.fat}g`}
          nutriText='Fat'
        />
        <NutritionalItem
          nutriValue={`${nutritionFacts.carbs}g`}
          nutriText='Carbs'
        />
        <NutritionalItem
          nutriValue={`${nutritionFacts.protein}g`}
          nutriText='Protein'
        />
      </div>
    </article>
  );
};

export default NutritionFacts;
