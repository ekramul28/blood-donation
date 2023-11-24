import { createBrowserRouter } from "react-router-dom";
import Root from "../page/root/Root";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import SearchPage from "../page/Search/SearchPage";

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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/search',
                element: <SearchPage></SearchPage>
            },
        ]
    },
]);


export default router;