import React from "react";
import Store from "./Components/Store/Store";
import ContextProvider from "./Components/ContextProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import Error from "./Components/Pages/Error";

const router = createBrowserRouter([
  { path: "/", element: <Home />,errorElement:<Error /> },
  {
    path: "/store",
    element: (
      <ContextProvider>
        <Store />
      </ContextProvider>
    ),
    errorElement:<Error />
  },
  { path: "/about", element: <About /> },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
