import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// layouts
import Main from './layouts/Main';

// pages
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
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
