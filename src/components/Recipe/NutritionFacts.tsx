import React from 'react';

// components
import RecipeCard from './RecipeCard';

type Props = {
  calories: number | undefined;
  fat: number | undefined;
  carbs: number | undefined;
  protein: number | undefined;
};

type ItemProps = {
  title: string;
  text: string;
};

const NutritionFacts = ({ calories, fat, carbs, protein }: Props) => {
  const NutritionItem = ({ title, text }: ItemProps) => {
    return (
      <div>
        <p className='font-semibold'>{text}</p>
        <h3 className='text-orange-500 font-bold'>{title}</h3>
      </div>
    );
  };

  return (
    <RecipeCard className='flex-1 h-fit'>
      <h1 className='text-3xl font-bold'>
        Nutrition Facts{' '}
        <span className='text-sm font-medium'>(per serving)</span>
      </h1>
      <div className='flex items-center justify-between bg-white px-6 py-2 rounded-lg mt-2'>
        <NutritionItem title='Calories' text={`${calories}`} />
        <NutritionItem title='Fat' text={`${fat}g`} />
        <NutritionItem title='Carbs' text={`${carbs}g`} />
        <NutritionItem title='Protein' text={`${protein}g`} />
      </div>
    </RecipeCard>
  );
};

export default NutritionFacts;
