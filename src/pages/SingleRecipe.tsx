import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { getRecipe } from '../features/allRecipes/recipeSlice';
import { HeartIcon } from '@heroicons/react/24/outline';

// components
import Spinner from '../components/UI/Spinner';
import Star from '../components/UI/Star';

// extras
import foodImg from '../assets/hero-img.jpg';

const SingleRecipe = () => {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, recipe } = useSelector((state: RootState) => state.recipe);

  const flexRow = 'flex items-center';

  useEffect(() => {
    dispatch(getRecipe(params.id!));
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <article className='flex flex-col md:flex-row gap-4 max-w-screen-xl mx-auto'>
      <section className='basis-2/3'>
        {/* recipe info */}
        <div>
          <img
            src={foodImg}
            alt={recipe?.name}
            className='w-full object-cover h-[400px] rounded-xl'
          />
          <section className='mt-2'>
            <h3 className='text-3xl font-semibold tracking-tighter'>
              {recipe?.name}
            </h3>
            <p className='text-sm font-normal'>{recipe?.description}</p>
          </section>
          <section className={`${flexRow} justify-between mt-2`}>
            <div className={`${flexRow} gap-x-4`}>
              <div>
                <h5 className='text-sm font-semibold'>{`${recipe?.createdBy.lastName} ${recipe?.createdBy.lastName}`}</h5>
                <p className='text-xs font-semibold text-orange-500'>
                  Followers: 1561
                </p>
              </div>
              <button className='border-2 border-orange-500 rounded-xl py-1 px-6 text-sm font-semibold text-orange-500'>
                Follow
              </button>
            </div>
            <div className={`${flexRow} gap-x-2.5`}>
              <div className={`${flexRow} gap-x-1`}>
                <Star value={recipe?.averageRating} color='orange' />
                <p className='text-xs font-bold text-orange-500'>
                  ({recipe?.numOfRatings})
                </p>
              </div>
              <button
                type='button'
                onClick={() => console.log('favourite')}
                className='transition duration-300 ease-in-out hover:scale-125'
              >
                <HeartIcon className='w-5 h-5 text-orange-500' />
              </button>
            </div>
          </section>
        </div>
        {/* cooking details */}
        <article className='grid grid-cols-4 justify-between text-center mt-2 bg-orange-50 rounded-xl py-2 md:py-4'>
          <div className='border-r-2 border-orange-500'>
            <h4 className='text-sm font-extrabold text-orange-500'>
              Prep Time:
            </h4>
            <p className='text-sm font-semibold'>
              {recipe?.recipeDetails.prepTime}
            </p>
          </div>
          <div className='border-r-2 border-orange-500'>
            <h4 className='text-sm font-extrabold text-orange-500'>
              Cook Time:
            </h4>
            <p className='text-sm font-semibold'>
              {recipe?.recipeDetails.cookTime}
            </p>
          </div>
          <div className='border-r-2 border-orange-500'>
            <h4 className='text-sm font-extrabold text-orange-500'>
              Total Time:
            </h4>
            <p className='text-sm font-semibold'>
              {recipe?.recipeDetails.totalTime}
            </p>
          </div>
          <div className='border-orange-500'>
            <h4 className='text-sm font-extrabold text-orange-500'>Servers:</h4>
            <p className='text-sm font-semibold'>
              {recipe?.recipeDetails.servings}
            </p>
          </div>
        </article>
        <section className='flex flex-col lg:flex-row gap-4 lg:gap-4 mt-4'>
          {/* recipe tips */}
          <article className='bg-orange-50 px-4 py-6 rounded-xl w-full'>
            <h3 className='text-2xl font-bold'>Recipe Tips</h3>
            <ul className='bg-white px-6 py-4 rounded-xl mt-4'>
              {recipe?.recipeTips.map((tip, index) => {
                return (
                  <li key={index} className='list-disc mx-4'>
                    {tip}
                  </li>
                );
              })}
            </ul>
          </article>
          {/* recipe equipment */}
          <article className='bg-orange-50 px-4 py-6 rounded-xl w-full'>
            <h3 className='text-2xl font-bold'>Equipment</h3>
            <ul className='grid grid-cols-2 gap-4 mt-4'>
              {recipe?.equipment?.map((equipment, index) => {
                return (
                  <li
                    key={index}
                    className='bg-white px-4 py-2.5 rounded-xl text-center font-semibold text-orange-500'
                  >
                    {equipment}
                  </li>
                );
              })}
            </ul>
          </article>
        </section>
        <section className='mt-4'>
          {/* recipe nutritional facts */}
          <article className='bg-orange-50 rounded-xl py-4 px-8'>
            <h3 className='text-2xl font-bold'>
              Nutritional Facts{' '}
              <span className='text-sm font-medium'>(per serving)</span>
            </h3>
            <div className='flex items-center justify-between bg-white px-6 py-2 rounded-xl mt-2'>
              <div>
                <h3 className='font-bold'>Calories</h3>
                <p className='text-orange-500 font-medium'>
                  {recipe?.nutritionFacts.calories}
                </p>
              </div>
              <div>
                <h3 className='font-bold'>Fat</h3>
                <p className='text-orange-500 font-medium'>
                  {recipe?.nutritionFacts.fat}g
                </p>
              </div>
              <div>
                <h3 className='font-bold'>Carbs</h3>
                <p className='text-orange-500 font-medium'>
                  {recipe?.nutritionFacts.carbs}g
                </p>
              </div>
              <div>
                <h3 className='font-bold'>Protein</h3>
                <p className='text-orange-500 font-medium'>
                  {recipe?.nutritionFacts.protein}g
                </p>
              </div>
            </div>
          </article>
        </section>
      </section>
      <section className='basis-1/3'>
        {/* recipe ingredients */}
        <div>
          <h1 className='text-center text-3xl font-bold'>Ingredients</h1>
          <ul className='mx-8'>
            {recipe?.ingredients?.map((ingredient, i) => (
              <li
                key={i}
                className='text-sm font-semibold py-4 border-b-2 border-b-orange-500'
              >
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        {/* recipe directions */}
        <div className='mt-8'>
          <h1 className='text-center text-3xl font-bold'>Directions</h1>
          <ul>
            {recipe?.directions?.map((direction, i) => (
              <li key={i} className='py-4'>
                <h2 className='font-bold text-lg'>Step {i + 1}</h2>
                <p>{direction}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
};

export default SingleRecipe;
