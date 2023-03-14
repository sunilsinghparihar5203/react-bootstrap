import React ,{useContext} from "react";
import Store from "./Components/Store/Store";
import ContextProvider from "./Components/ContextProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import Error from "./Components/Pages/Error";
import Contact from "./Components/Pages/Contact";
import ItemDetail from "./Components/Store/ItemDetail";
import Welcome from "./Components/Pages/Welcome";
import Login from "./Components/Pages/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ContextProvider>
        <Home />
      </ContextProvider>
    ),
    errorElement: <Error />,
    children: [
      { path: "/", element: <Welcome />},
      { path: "/store", element: <Store />},
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
      {path: "/store/:productId",element: <ItemDetail />},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
