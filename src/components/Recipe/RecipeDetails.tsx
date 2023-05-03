import React from 'react';

type Props = {
  prep_time: number | undefined;
  cook_time: number | undefined;
  additional_time: number | undefined;
  total_time: number | undefined;
  servings: number | undefined;
  difficulty: string | undefined;
};

type ItemProps = {
  title: string;
  text: string;
  borderR?: boolean;
};

const RecipeDetails = ({
  prep_time,
  cook_time,
  additional_time,
  total_time,
  servings,
  difficulty,
}: Props) => {
  const RecipeItem = ({ title, text, borderR }: ItemProps) => {
    return (
      <div className={`${borderR && 'lg:border-r-2 lg:border-r-orange-500'}`}>
        <h3 className='font-semibold text-orange-500'>{title}</h3>
        <p className='text-sm font-medium capitalize'>{text}</p>
      </div>
    );
  };

  return (
    <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4 mt-2 bg-orange-100 px-4 py-2 rounded-lg'>
      <RecipeItem title='Prep Time:' text={`${prep_time} mins`} borderR />
      <RecipeItem title='Cook Time:' text={`${cook_time} mins`} borderR />
      <RecipeItem
        title='Additional Time:'
        text={`${additional_time} mins`}
        borderR
      />
      <RecipeItem title='Total Time:' text={`${total_time} hrs`} borderR />
      <RecipeItem title='Servings:' text={`${servings}`} borderR />
      <RecipeItem title='Difficulty:' text={`${difficulty}`} />
    </section>
  );
};

export default RecipeDetails;
