import React from 'react';

type Props = {
  className?: string | undefined;
  children: React.ReactNode;
};

const RecipeCard = ({ className, children }: Props) => {
  return (
    <div
      className={`${
        className ? className : ''
      } bg-orange-100 px-4 py-2 rounded-lg`}
    >
      {children}
    </div>
  );
};

export default RecipeCard;
