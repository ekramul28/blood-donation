import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
const Dashboard = () => {
    return (
        <div className="flex  ">
            <div className="w-1/4">
                <ul className="   lg:w-80  min-h-full bg-orange-300 p-2 md:p-6 text-white ">

                    <NavLink to="dashboards" className="flex my-4 md:text-xl font-bold gap-2  items-center"><FaHome></FaHome> DashboardHome</NavLink>
                    <NavLink to="/dashboard/profile" className="flex my-4 md:text-xl font-bold gap-2 items-center"><CgProfile></CgProfile> Profile</NavLink>
                    <NavLink to="/dashboard/myDonationRequests" className="flex my-4 md:text-xl font-bold gap-2 items-center"><MdBloodtype></MdBloodtype> My Donation Requests</NavLink>
                    <NavLink to="/dashboard/donationRequest" className="flex my-4 md:text-xl font-bold gap-2 items-center"><MdBloodtype></MdBloodtype> Donation-request</NavLink>
                    <NavLink to="/dashboard/users" className="flex my-4 md:text-xl font-bold gap-2 items-center"><CgProfile></CgProfile> All User</NavLink>
                    <NavLink to="/dashboard/allRequest" className="flex my-4 md:text-xl font-bold gap-2 items-center"><CgProfile></CgProfile> all Request</NavLink>
                    <NavLink to="/dashboard/home" className="flex my-4 md:text-xl font-bold gap-2 items-center"><FaHome></FaHome> Home</NavLink>
                    <NavLink to="/" className="flex my-4 md:text-xl font-bold gap-2 items-center"><FaHome></FaHome> Home</NavLink>

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