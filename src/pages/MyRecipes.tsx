import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserRecipes } from '../features/allRecipes/recipeSlice';
import { AppDispatch, RootState } from '../store';

// components
import Spinner from '../components/Spinner';

// extras
import heroImg from '../assets/hero-img.jpg';

const MyRecipes = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, userRecipes } = useSelector(
    (state: RootState) => state.recipe
  );

  useEffect(() => {
    dispatch(getUserRecipes());
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className='mt-4'>
      <div className='relative h-[calc(100vh-200px)] overflow-auto shadow-md sm:rounded-lg'>
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
                    <button className='font-medium text-red-600 hover:underline'>
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
