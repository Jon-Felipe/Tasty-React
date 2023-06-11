type Props = {
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
};

const RecipeNutritionalFacts = ({ calories, fat, carbs, protein }: Props) => {
  return (
    <section className='mt-4'>
      <article className='bg-orange-50 rounded-xl py-4 px-8'>
        <h3 className='text-2xl font-bold'>
          Nutritional Facts{' '}
          <span className='text-sm font-medium'>(per serving)</span>
        </h3>
        <div className='flex items-center justify-between bg-white px-6 py-2 rounded-xl mt-2'>
          <div>
            <h3 className='font-bold'>Calories</h3>
            <p className='text-orange-500 font-medium'>{calories}</p>
          </div>
          <div>
            <h3 className='font-bold'>Fat</h3>
            <p className='text-orange-500 font-medium'>{fat}g</p>
          </div>
          <div>
            <h3 className='font-bold'>Carbs</h3>
            <p className='text-orange-500 font-medium'>{carbs}g</p>
          </div>
          <div>
            <h3 className='font-bold'>Protein</h3>
            <p className='text-orange-500 font-medium'>{protein}g</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default RecipeNutritionalFacts;
