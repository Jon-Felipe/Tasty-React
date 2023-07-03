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
  About,
  Contact,
  Login,
  Register,
  SingleRecipe,
  Profile,
  MyRecipes,
} from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='recipe/:id' element={<SingleRecipe />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='profile' element={<ProfileLayout />}>
        <Route index element={<Profile />} />
        <Route path='my-recipes' element={<MyRecipes />} />
      </Route>
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
