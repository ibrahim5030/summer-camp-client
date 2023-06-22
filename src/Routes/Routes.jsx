import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import NotFound from "../Pages/NotFound/NotFound";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import Welcome from "../Pages/Dashboard/Welcome/Welcome";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import InstructorRoute from "./InstructorRoute";
import AddAClass from "../Pages/Dashboard/AddAClass/AddAClass";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import Update from "../Pages/Dashboard/Update/Update";
import Feedback from "../Pages/Dashboard/Feedback/Feedback";
import SelectedClasses from "../Pages/Dashboard/SelectedClasses/SelectedClasses";
import EnrolledClasses from "../Pages/Dashboard/EnrolledClasses/EnrolledClasses";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import Payment from "../Pages/Dashboard/Payment/Payment";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,        
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/instructors",
                element: <Instructors></Instructors>
            },
            {
                path: "/classes",
                element: <Classes></Classes>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ],
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "welcome",
                element: <Welcome></Welcome>
            },
            {
                path: "manageusers",
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: "manageclasses",
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: "feedback/:id",
                element: <AdminRoute><Feedback></Feedback></AdminRoute>,
                loader: ({params}) => fetch(`https://b7a12-summer-camp-server-psi.vercel.app/sports/${params.id}`)
            },
            {
                path: "addaclass",
                element: <InstructorRoute><AddAClass></AddAClass></InstructorRoute>
            },
            {
                path: "myclasses",
                element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },
            {
                path: "update/:id",
                element: <InstructorRoute><Update></Update></InstructorRoute>,
                loader: ({params}) => fetch(`https://b7a12-summer-camp-server-psi.vercel.app/myclasses/${params.id}`)
            },
            {
                path: "selectedclass",
                element: <SelectedClasses></SelectedClasses>
            },
            {
                path: "enrolledclass",
                element: <EnrolledClasses></EnrolledClasses>
            },
            {
                path: "paymenthistory",
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: "payment/:id",
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`https://b7a12-summer-camp-server-psi.vercel.app/classes/${params.id}`)                
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);

export default router;