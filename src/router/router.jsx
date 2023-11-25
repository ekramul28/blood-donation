import { createBrowserRouter } from "react-router-dom";
import Root from "../page/root/Root";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import SearchPage from "../page/Search/SearchPage";
import Dashboard from "../page/Dashboard/Dashboard";
import Profile from "../page/Profile/Profile";
import DonationRequest from "../page/DonationRequest/DonationRequest";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'search',
                element: <SearchPage></SearchPage>
            },
            {
                path: 'request',
                element: <DonationRequest></DonationRequest>
            },


        ],

    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'profile',
                element: <Profile></Profile>
            }
        ]

    }

]);


export default router;