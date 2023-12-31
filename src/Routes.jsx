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
import MyClasses from "./Dashboard/InstractorRoutes/MyClasses";
import SendFeedback from "./Dashboard/AdminRoutes/SendFeedback";
import PrivateRoute from "./PrivateRoutes";
import Classes from "./Pages/Home/Classes/Classes";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import MySelectedClass from "./Dashboard/StudentRoutes/MySelectedClass";
import Payment from "./Dashboard/StudentRoutes/Payment";
import EnrolledClasses from "./Dashboard/StudentRoutes/EnrolledClasses";
import PaymentHistory from "./Dashboard/StudentRoutes/PaymentHistory";
import AllInstractor from "./Pages/Home/Instructors/Instructor";
import LearnMore from "./Pages/Home/Private lesson/LearnMore";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path:'signUp',
            element: <SignUp></SignUp>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: '/classes',
            element: <Classes></Classes>
        },
        {
            path: 'instructor',
            element: <AllInstractor></AllInstractor>
        },
        {
            path: 'learn',
            element: <LearnMore/>
        }
      ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
        errorElement: <ErrorPage/>,
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
            },
            {
                path: 'myClasses',
                element: <MyClasses></MyClasses>
            },
            {
                path: 'feedBack/:id',
                element: <SendFeedback></SendFeedback>,
            },
            {
                path: 'selectedClass',
                element: <MySelectedClass/>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'enrolled',
                element: <EnrolledClasses/>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            }
        ]
    }
  ]);

  export default router