import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

// extras
import { AppDispatch } from '../store';
import { getAllRecipes } from '../features/allRecipes/recipeSlice';
import { cuisineTypes, dishTypes } from '../utils/constants';

const Category = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (cuisineTypes.includes(id!)) {
      dispatch(getAllRecipes({ cuisine: [id!] }));
    } else if (dishTypes.includes(id!)) {
      dispatch(getAllRecipes({ dishType: id }));
    }
  }, [id]);

  return <div>Category</div>;
};

export default Category;
