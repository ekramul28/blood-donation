import { NavLink, Outlet } from "react-router-dom";
import { CgController, CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { IoGitPullRequestSharp } from "react-icons/io5";
import useUser from "../../../hooks/useUser";

const Dashboard = () => {
  const [, data] = useUser();

  return (
    <div className="md:flex  h-screen ">
      <div className="  md:w-1/5 text-red-600">
        <ul className="     min-h-full bg-red-600  p-2 md:p-4 text-white ">
          {data?.Role === "admin" ? (
            <>
              <li>
                <NavLink
                  to="/"
                  className="flex items-center gap-2 bg-white rounded py-2 w-full mx-auto"
                >
                  <div className=" pl-6">
                    <img
                      className="w-4 h-4 md:w-8 md:h-8 rounded-full bg-cover"
                      src="https://i.ibb.co/7nHmfGY/vecteezy-hand-holding-a-drop-of-blood-world-blood-donor-day-blood-19152949-removebg-preview-1.png"
                      alt=""
                    />
                  </div>
                  <h1 className="text-2xl font-semibold text-red-600 hidden md:block">
                    Grant
                  </h1>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/home"
                  className="flex my-2 mt-4 md:text-lg font-bold gap-1 items-center"
                >
                  <FaHome></FaHome> adminHome
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/users"
                  className="flex my-3 md:text-lg font-bold gap-2 items-center"
                >
                  <CgProfile></CgProfile> All User
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/allRequest"
                  className="flex my-3 md:text-lg font-bold gap-2 items-center"
                >
                  <IoGitPullRequestSharp></IoGitPullRequestSharp> all Request
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/content"
                  className="flex my-3 md:text-lg font-bold gap-2 items-center"
                >
                  <CgController></CgController> Content
                </NavLink>
              </li>
              <div className="divider">OR</div>
              <li>
                <NavLink
                  to="/dashboard/volunteerHome"
                  className="flex my-3 md:text-lg font-bold gap-2 items-center"
                >
                  <FaHome></FaHome>Home V
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/volunteerAllRequest"
                  className="flex my-3 md:text-lg font-bold gap-2 items-center"
                >
                  <IoGitPullRequestSharp></IoGitPullRequestSharp>AllRequest V
                </NavLink>
              </li>

              <div className="divider">OR</div>
            </>
          ) : (
            ""
          )}
          {data?.Role === "volunteer" ? (
            <>
              <li>
                <NavLink
                  to="/dashboard/volunteerHome"
                  className="flex my-3 md:text-lg font-bold gap-2 items-center"
                >
                  <FaHome></FaHome> Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/volunteerAllRequest"
                  className="flex my-3 md:text-lg font-bold gap-2 items-center"
                >
                  <IoGitPullRequestSharp></IoGitPullRequestSharp> Request
                </NavLink>
              </li>
              <div className="divider">OR</div>
            </>
          ) : (
            ""
          )}
          <li>
            <NavLink
              to="dashboards"
              className="flex my-3 md:text-lg font-bold gap-2  items-center"
            >
              <FaHome></FaHome> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/profile"
              className="flex my-3 md:text-lg font-bold gap-2 items-center"
            >
              <CgProfile></CgProfile> Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/myDonationRequests"
              className="flex my-3 md:text-lg font-bold gap-2 items-center"
            >
              <IoGitPullRequestSharp></IoGitPullRequestSharp> My Requests
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/donationRequest"
              className="flex my-3 md:text-lg font-bold gap-2 items-center"
            >
              <MdBloodtype></MdBloodtype> Request
            </NavLink>
          </li>
        </ul>
      </div>

      <div className=" md:w-full  overflow-y-scroll">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
