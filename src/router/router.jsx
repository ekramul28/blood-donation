import { createBrowserRouter } from "react-router-dom";
import Root from "../page/root/Root";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import SearchPage from "../page/Search/SearchPage";
import Dashboard from "../page/allDasbord/Dashboard/Dashboard";
import DonationRequest from "../page/DonationRequest/DonationRequest";
import DashboardHome from "../page/allDasbord/DashnoardHome/DashboardHome";
import Profile from "../page/allDasbord/Profile/Profile";
import MyDonationRequests from "../page/allDasbord/my-donation-requests/donationRequests";
import User from "../page/allDasbord/User/User";
import AdminHome from "../page/allDasbord/AdminHome/AdminHome";
import PendingDonationRequest from "../page/pendingDonationRequest/pendingDonationRequest";
import DetailsPage from "../page/pendingDonationRequest/DetailsPage";
import UpdatePage from "../page/allDasbord/UpdatePage/UpdatePage";
import AllRequest from "../page/allDasbord/AllRequest/AllRequest";

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
                path: 'pendingRequest',
                element: <PendingDonationRequest></PendingDonationRequest>
            },
            {
                path: 'details/:id',
                element: <DetailsPage></DetailsPage>,
            },


        ],

    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'dashboards',
                element: <DashboardHome></DashboardHome>
            },
            {
                path: 'profile',
                element: <Profile></Profile>
            },
            {
                path: 'myDonationRequests',
                element: <MyDonationRequests></MyDonationRequests>
            },
            {
                path: 'donationRequest',
                element: <DonationRequest></DonationRequest>
            },
            {
                path: 'update/:id',
                element: <UpdatePage></UpdatePage>
            },
            // admin
            {
                path: 'users',
                element: <User></User>
            },
            {
                path: 'home',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'allRequest',
                element: <AllRequest></AllRequest>
            },
        ]

    }

]);


export default router;