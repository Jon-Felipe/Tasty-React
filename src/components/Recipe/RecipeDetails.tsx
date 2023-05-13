import React from 'react';

type Props = {
  prep_time: number | undefined;
  cook_time: number | undefined;
  total_time: number | undefined;
  servings: number | undefined;
};

type RecipeDetailItem = {
  text: string;
  recipeItem: string | number;
  borderR?: boolean;
};

const RecipeDetails = ({
  prep_time,
  cook_time,
  total_time,
  servings,
}: Props) => {
  const RecipeDetailsItem = ({
    text,
    recipeItem,
    borderR,
  }: RecipeDetailItem) => {
    return (
      <div className={`${borderR ? 'border-r-2 border-orange-500' : ''}`}>
        <h4 className='text-sm font-extrabold text-orange-500'>{text}</h4>
        <p className='text-sm font-semibold'>{recipeItem}</p>
      </div>
    );
  };

  return (
    <article className='grid grid-cols-4 justify-between text-center mt-2 bg-orange-50 rounded-xl py-2 md:py-4'>
      <RecipeDetailsItem
        text='Prep Time:'
        recipeItem={`${prep_time} mins`}
        borderR
      />
      <RecipeDetailsItem
        text='Cook Time:'
        recipeItem={`${cook_time} mins`}
        borderR
      />
      <RecipeDetailsItem
        text='Total Time:'
        recipeItem={`${total_time} mins`}
        borderR
      />
      <RecipeDetailsItem text='Serves:' recipeItem={`${servings}`} />
    </article>
  );
};

export default RecipeDetails;
