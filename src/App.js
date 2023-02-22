import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Store from './Store';
import Home from './Home';
import About from './About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/store",
    element: <Store />,
  },
  {
    path: "/about",
    element: <About />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;


