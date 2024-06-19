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
import VolunteerHome from "../page/VolunteerHome/VolunteerHome";
import VolunteerAllRequest from "../page/VolunteerAllRequest/VolunteerAllRequest";
import PrivateRoute from "./PrivateRout";
import AdminRout from "./AdminRout";
import NoPage from "../page/Nopage/NoPage";
import ContentManagement from "../page/ContentManagement/ContentManagement";
import AddBlog from "../page/addBlog/AddBlog";
import Blog from "../page/blog/Blog";
import Payment from "../page/payment/Payment";
import DashboardProfile from "../page/allDasbord/DashboardProfile/DashboardProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NoPage></NoPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "search",
        element: <SearchPage></SearchPage>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "pendingRequest",
        element: <PendingDonationRequest></PendingDonationRequest>,
      },
      {
        path: "details/:id",
        element: (
          <PrivateRoute>
            <DetailsPage></DetailsPage>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <NoPage></NoPage>,
    children: [
      {
        path: "dashboards",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
        // element: <DashboardProfile></DashboardProfile>,
      },

      {
        path: "myDonationRequests",
        element: <MyDonationRequests></MyDonationRequests>,
      },
      {
        path: "donationRequest",
        element: <DonationRequest></DonationRequest>,
      },
      {
        path: "update/:id",
        element: <UpdatePage></UpdatePage>,
      },
      // Volunteer
      {
        path: "volunteerHome",
        element: <VolunteerHome></VolunteerHome>,
      },
      {
        path: "volunteerAllRequest",
        element: <VolunteerAllRequest></VolunteerAllRequest>,
      },
      // admin
      {
        path: "users",
        element: (
          <AdminRout>
            <User></User>
          </AdminRout>
        ),
      },
      {
        path: "home",
        element: (
          <AdminRout>
            <AdminHome></AdminHome>
          </AdminRout>
        ),
      },
      {
        path: "allRequest",
        element: (
          <AdminRout>
            <AllRequest></AllRequest>
          </AdminRout>
        ),
      },
      {
        path: "content",
        element: <ContentManagement></ContentManagement>,
      },
      {
        path: "addBlog",
        element: <AddBlog></AddBlog>,
      },
    ],
  },
]);

export default router;
