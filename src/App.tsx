import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// layouts
import Main from './layouts/Main';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import SingleRecipe from './pages/SingleRecipe';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Main />}>
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
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
