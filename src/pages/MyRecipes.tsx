import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  deleteRecipe,
  getUserRecipes,
} from '../features/allRecipes/allRecipesSlice';
import { AppDispatch, RootState } from '../store';

// components
import Spinner from '../components/Spinner';

// extras
import heroImg from '../assets/hero-img.jpg';

const MyRecipes = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, userRecipes, totalRecipes } = useSelector(
    (state: RootState) => state.allRecipes
  );

  const handleOnClick = (recipeId: number) => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      dispatch(deleteRecipe(recipeId.toString()));
    }
  };

  useEffect(() => {
    dispatch(getUserRecipes());
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section>
      <div className='my-4 flex items-center justify-between'>
        <h3 className='text-xl font-semibold'>{totalRecipes} Recipes Found</h3>
        <Link
          to='/create-recipe'
          className='border-2 border-orange-500 rounded-md px-4 py-2 font-semibold text-orange-400 shadow hover:bg-orange-500 hover:text-white'
        >
          Create New Recipe
        </Link>
      </div>
      <div className='relative h-screen overflow-auto shadow-md sm:rounded-lg'>
        <table className='w-full text sm text-left text-gray-500'>
          <thead className='thead text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Recipe Id
              </th>
              <th scope='col' className='px-6 py-3'>
                Recipe Image
              </th>
              <th scope='col' className='px-6 py-3'>
                Recipe Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Created At
              </th>
              <th scope='col' className='px-6 py-3'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {userRecipes.map((recipe) => {
              return (
                <tr
                  key={recipe._id}
                  className='odd:bg-white even:bg-gray-50 border-b'
                >
                  <th
                    scope='row'
                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                  >
                    {recipe._id}
                  </th>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <img
                      src={heroImg}
                      alt={recipe.name}
                      className='w-24 h-14 object-cover rounded-md'
                    />
                  </td>
                  <td className='px-6 py-4'>{recipe.name}</td>
                  <td className='px-6 py-4'>2023-08-26</td>
                  <td className='px-6 py-4 space-x-3'>
                    <button className='font-medium text-blue-600 hover:underline'>
                      Edit
                    </button>
                    <button
                      className='font-medium text-red-600 hover:underline'
                      onClick={() => handleOnClick(recipe._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyRecipes;
