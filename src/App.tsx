import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// layouts
import RootLayout from './layouts/RootLayout';
import ProfileLayout from './layouts/ProfileLayout';

// pages
import {
  Home,
  Login,
  Register,
  Recipes,
  SingleRecipe,
  Profile,
  MyRecipes,
  FavouriteRecipes,
  ProtectedRoute,
  Error,
} from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='recipes' element={<Recipes />} />
      <Route path='recipe/:id' element={<SingleRecipe />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route
        path='profile'
        element={
          <ProtectedRoute>
            <ProfileLayout />
          </ProtectedRoute>
        }
      >
        <Route path='my-information' element={<Profile />} />
        <Route path='my-recipes' element={<MyRecipes />} />
        <Route path='my-favourites' element={<FavouriteRecipes />} />
      </Route>
      <Route path='*' element={<Error />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position='top-center' />
    </>
  );
}

export default App;
