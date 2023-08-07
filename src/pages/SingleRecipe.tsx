import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { getRecipe } from '../features/allRecipes/recipeSlice';
import { HeartIcon } from '@heroicons/react/24/outline';

// components
import Spinner from '../components/Spinner';
import Star from '../components/Star';

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
    <article className='flex flex-col md:flex-row gap-4'>
      <section className='basis-2/3'>
        {/* recipe info */}
        <div>
          <img
            src={foodImg}
            alt={recipe?.name}
            className='w-full object-cover h-[400px] rounded-xl'
          />
          <section className='mt-2'>
            <h3 className='text-3xl font-semibold tracking-tighter capitalize'>
              {recipe?.name}
            </h3>
            <p className='text-sm font-normal'>{recipe?.description}</p>
          </section>
          <section className={`${flexRow} justify-between mt-2`}>
            <div className={`${flexRow} gap-x-4`}>
              <div>
                <h5 className='text-sm font-semibold'>{`${recipe?.createdBy.name} ${recipe?.createdBy.lastName}`}</h5>
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
        <article className='grid grid-cols-4 justify-between text-center mt-2 bg-orange-50 rounded-xl py-2 md:py-4 [&>*:not(:last-child)]:border-r-2'>
          <CookingDetail
            text='Prep Time (min):'
            value={recipe!?.recipeDetails?.prepTime}
          />
          <CookingDetail
            text='Cook Time (min):'
            value={recipe!?.recipeDetails?.cookTime}
          />
          <CookingDetail
            text='Total Time (min):'
            value={recipe!?.recipeDetails.totalTime}
          />
          <CookingDetail text='Yields:' value={recipe!?.recipeDetails?.yield} />
        </article>
        <section className='flex flex-col lg:flex-row gap-4 lg:gap-4 mt-4'>
          {/* recipe tips */}
          <article className='bg-orange-50 px-4 py-6 rounded-xl w-full'>
            <h3 className='text-2xl font-bold'>Recipe Tips</h3>
            <ul className='bg-white px-6 py-4 rounded-xl mt-4'>
              {recipe?.recipeTips.map((tip, index) => {
                return (
                  <li key={index} className='list-disc mx-4 capitalize'>
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
                    className='bg-white px-4 py-2.5 rounded-xl text-center font-semibold text-orange-500 capitalize'
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
              <NutritionalFact
                text='Calories'
                value={recipe!?.nutritionFacts?.calories}
              />
              <NutritionalFact
                text='Fat'
                value={`${recipe!?.nutritionFacts?.calories}g`}
              />
              <NutritionalFact
                text='Carbs'
                value={`${recipe!?.nutritionFacts?.carbs}g`}
              />
              <NutritionalFact
                text='Protein'
                value={`${recipe!?.nutritionFacts?.protein}g`}
              />
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
                className='text-sm font-semibold py-4 border-b-2 border-b-orange-500 capitalize'
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
                <p className='capitalize'>{direction}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
};

export default SingleRecipe;

type RecipeItemType = {
  text: string;
  value: string | number;
};

const CookingDetail = ({ text, value }: RecipeItemType) => {
  return (
    <div className='border-orange-500 mx-4'>
      <h4 className='text-sm font-extrabold text-orange-500'>{text}</h4>
      <p className='text-sm font-semibold'>{value}</p>
    </div>
  );
};

const NutritionalFact = ({ text, value }: RecipeItemType) => {
  return (
    <div>
      <h3 className='font-bold'>{text}</h3>
      <p className='text-orange-500 font-medium'>{value}</p>
    </div>
  );
};
