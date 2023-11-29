import { NavLink, Outlet } from "react-router-dom";
import { CgController, CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { IoGitPullRequestSharp } from "react-icons/io5";
import useUser from "../../../hooks/useUser";
const Dashboard = () => {
    const [, data] = useUser();
    return (
        <div className="md:flex  ">
            <div className="  md:w-1/4">
                <ul className="     min-h-full bg-orange-300 p-2 md:p-6 text-white ">
                    {

                        (data?.Role === 'admin') ? <>
                            <li>
                                <NavLink to="/dashboard/home" className="flex my-4 md:text-xl font-bold gap-2 items-center"><FaHome></FaHome> adminHome</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users" className="flex my-4 md:text-xl font-bold gap-2 items-center"><CgProfile></CgProfile> All User</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allRequest" className="flex my-4 md:text-xl font-bold gap-2 items-center"><IoGitPullRequestSharp></IoGitPullRequestSharp> all Request</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/content" className="flex my-4 md:text-xl font-bold gap-2 items-center"><CgController></CgController> Content</NavLink>
                            </li>
                            <div className="divider">OR</div>
                            <li>
                                <NavLink to="/dashboard/volunteerHome" className="flex my-4 md:text-xl font-bold gap-2 items-center"><FaHome></FaHome>Home V</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/volunteerAllRequest" className="flex my-4 md:text-xl font-bold gap-2 items-center"><IoGitPullRequestSharp></IoGitPullRequestSharp>AllRequest V</NavLink>
                            </li>


                            <div className="divider">
                                OR
                            </div>

                        </> : ""
                    }
                    {
                        (data?.Role === 'volunteer') ? <>
                            <li>
                                <NavLink to="/dashboard/volunteerHome" className="flex my-4 md:text-xl font-bold gap-2 items-center"><FaHome></FaHome> Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/volunteerAllRequest" className="flex my-4 md:text-xl font-bold gap-2 items-center"><IoGitPullRequestSharp></IoGitPullRequestSharp> Request</NavLink>
                            </li>
                            <div className="divider">OR</div>
                        </> : ""
                    }
                    <li>
                        <NavLink to="dashboards" className="flex my-4 md:text-xl font-bold gap-2  items-center"><FaHome></FaHome> Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/profile" className="flex my-4 md:text-xl font-bold gap-2 items-center"><CgProfile></CgProfile> Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/myDonationRequests" className="flex my-4 md:text-xl font-bold gap-2 items-center"><IoGitPullRequestSharp></IoGitPullRequestSharp> My Requests</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/donationRequest" className="flex my-4 md:text-xl font-bold gap-2 items-center"><MdBloodtype></MdBloodtype> Request</NavLink>
                    </li>
                    <div className="divider">OR</div>
                    <li>
                        <NavLink to="/" className="flex my-4 md:text-xl font-bold gap-2 items-center"><FaHome></FaHome> Home</NavLink>
                    </li>
                </ul>
            </div>


            <div className=" md:w-3/4 min-h-screen">
                {/* Page content here */}
                <Outlet></Outlet>
            </div>

        </div>

    );
};

export default Dashboard;