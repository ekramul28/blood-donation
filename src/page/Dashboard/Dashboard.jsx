import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
const Dashboard = () => {
    return (
        <div className="flex  ">
            <div className="w-1/4">
                <ul className="   lg:w-80  min-h-full bg-orange-300 p-2 md:p-6 text-white ">

                    <NavLink to="/dashboard/profile" className="flex gap-4 md:text-xl font-bold  items-center"><CgProfile></CgProfile> Profile</NavLink>
                    <NavLink to="/" className="flex gap-4 md:text-xl font-bold  items-center"><FaHome></FaHome> Home</NavLink>

                </ul>
            </div>


            <div className="w-3/4 min-h-screen">
                {/* Page content here */}
                <Outlet></Outlet>
            </div>

        </div>

    );
};

export default Dashboard;