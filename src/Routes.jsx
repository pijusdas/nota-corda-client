import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home/Home";
import SignUp from "./Pages/Login/SignUp";
import Login from "./Pages/SignIn/Login";
import Dashboard from "./Dashboard/Dashboard";


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
            path:'/signUp',
            element: <SignUp></SignUp>
        },
        {
            path: '/login',
            element: <Login></Login>
        }
      ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
    }
  ]);

  export default router