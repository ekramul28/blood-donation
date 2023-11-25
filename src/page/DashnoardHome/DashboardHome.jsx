import { Outlet } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

const DashboardHome = () => {
    return (
        <div>
            <Dashboard></Dashboard>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardHome;