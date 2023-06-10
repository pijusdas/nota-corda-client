import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home/Home";
import SignUp from "./Pages/Login/SignUp";
import Login from "./Pages/SignIn/Login";
import Dashboard from "./Dashboard/Dashboard";
import ManageUsers from "./Dashboard/AdminRoutes/ManageUsers";
import MangeClasses from "./Dashboard/AdminRoutes/MangeClasses";
import AddClass from "./Dashboard/InstractorRoutes/AddClass";


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
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'manageUser',
                element: <ManageUsers></ManageUsers>
            },
            {
                path:'manageClasses',
                element: <MangeClasses></MangeClasses>
            },
            {
                path: 'addClass',
                element: <AddClass></AddClass>
            }
        ]
    }
  ]);

  export default router