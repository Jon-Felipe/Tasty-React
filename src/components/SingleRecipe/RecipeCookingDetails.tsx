type Props = {
  prepTime: number;
  cookTime: number;
  totalTime: number;
  servings: number;
};

const RecipeCookingDetails = ({
  prepTime,
  cookTime,
  totalTime,
  servings,
}: Props) => {
  return (
    <article className='grid grid-cols-4 justify-between text-center mt-2 bg-orange-50 rounded-xl py-2 md:py-4'>
      <div className='border-r-2 border-orange-500'>
        <h4 className='text-sm font-extrabold text-orange-500'>Prep Time:</h4>
        <p className='text-sm font-semibold'>{prepTime}</p>
      </div>
      <div className='border-r-2 border-orange-500'>
        <h4 className='text-sm font-extrabold text-orange-500'>Cook Time:</h4>
        <p className='text-sm font-semibold'>{cookTime}</p>
      </div>
      <div className='border-r-2 border-orange-500'>
        <h4 className='text-sm font-extrabold text-orange-500'>Total Time:</h4>
        <p className='text-sm font-semibold'>{totalTime}</p>
      </div>
      <div className='border-orange-500'>
        <h4 className='text-sm font-extrabold text-orange-500'>Servers:</h4>
        <p className='text-sm font-semibold'>{servings}</p>
      </div>
    </article>
  );
};

export default RecipeCookingDetails;
