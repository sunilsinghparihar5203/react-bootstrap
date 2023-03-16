import React, { useContext } from "react";
import Store from "./Components/Store/Store";
import ContextProvider from "./Components/ContextProvider";
import { Switch, Route } from "react-router-dom";

import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import Error from "./Components/Pages/Error";
import Contact from "./Components/Pages/Contact";
import ItemDetail from "./Components/Store/ItemDetail";
import Welcome from "./Components/Pages/Welcome";
import Login from "./Components/Pages/Login";
import { authContext } from "./Components/Context";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <ContextProvider>
//         <Home />
//       </ContextProvider>
//     ),
//     errorElement: <Error />,
//     children: [
//       { path: "/", element: <Welcome /> },
//       { path: "/store", element: <Store /> },
//       { path: "/about", element: <About /> },
//       { path: "/contact", element: <Contact /> },
//       { path: "/login", element: <Login /> },
//       { path: "/store/:productId", element: <ItemDetail /> },
//     ],
//   },
// ]);

function App() {
  const authCtx = useContext(authContext);
  console.log({ authCtxAPp: authCtx });

  return (
    <ContextProvider>
      <Home>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route  exact path="/store">
            <Store />
          </Route>
          <Route  path="/about">
            <About />
          </Route>
          <Route  path="/contact">
            <Contact />
          </Route>
          <Route  path="/login">
            <Login />
          </Route>
          <Route exact path="/store/:productId">
            <ItemDetail />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Home>
    </ContextProvider>
  );
}

export default App;
