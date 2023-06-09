import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home/Home";
import SignUp from "./Pages/Login/SignUp";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path:'/login',
            element: <SignUp></SignUp>
        }
      ]
    },
  ]);

  export default router