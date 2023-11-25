import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
const Dashboard = () => {
    return (
        <div className="bg-base-200">
            <div className="drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div className="drawer-side">
                    {/* <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> */}
                    <ul className="menu p-4 lg:w-80 w-40 min-h-full bg-slate-700 text-white ">
                        {/* Sidebar content here */}
                        <Link to="/profile" className="flex justify-center items-center"><CgProfile></CgProfile> Profile</Link>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;