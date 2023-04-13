import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// layouts
import Main from './layouts/Main';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Recipes from './pages/Recipes';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'recipes',
        element: <Recipes />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
