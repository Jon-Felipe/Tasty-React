import React from 'react';
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

// pages
import { Home, About, Contact, Login, Register, SingleRecipe } from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='recipe/:id' element={<SingleRecipe />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer position='top-center' />
    </div>
  );
}

export default App;
