import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import {
  clearFilters,
  getAllRecipes,
} from '../features/allRecipes/recipeSlice';

// components
import RecipeCard from '../components/RecipeCard';
import Spinner from '../components/Spinner';

// extras
import PageButtonContainer from '../components/PageButtonContainer';

const Recipes = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, recipes, totalRecipes, page } = useSelector(
    (state: RootState) => state.recipe
  );

  useEffect(() => {
    dispatch(clearFilters());
    dispatch(getAllRecipes({ limit: 12, page }));
  }, [page]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <article>
      <header className='w-full md:w-3/4'>
        <h1 className='text-4xl text-slate-700 font-bold uppercase'>
          Browsing all Recipes{' '}
          <span className='text-xs'>({totalRecipes}) recipes found</span>
        </h1>
        <div className='my-2'>
          <p className='text-slate-700 my-4 tracking-tight'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            beatae dolore doloribus eum quos quisquam libero molestiae eius ab
            aspernatur quo nam, ea ipsam dolores asperiores nobis id minima a
            natus illo quae. Libero vitae aliquam ea temporibus cum eos corporis
            eveniet! Nesciunt sunt labore cupiditate, fuga incidunt voluptatibus
            cumque!
          </p>
        </div>
      </header>
      <section>
        <div className='grid gap-y-6 md:gap-x-6 md:grid-cols-2 lg:grid-cols-4'>
          {recipes.map((recipe) => {
            return <RecipeCard key={recipe._id} recipe={recipe} />;
          })}
        </div>
      </section>
      <PageButtonContainer />
    </article>
  );
};

export default Recipes;
