import { NavLink } from "react-router-dom";
const Navbar = () => {
    const link = <>
        <li className="font-semibold text-lg dark:text-white"><NavLink to="/"> Home</NavLink></li>
        <li className="font-semibold text-lg dark:text-white"><NavLink to="/donationRequests"> Donation requests</NavLink></li>
        <li className="font-semibold text-lg dark:text-white"><NavLink to="/blog"> Blog</NavLink></li>
        <li className="font-semibold text-lg dark:text-white"><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li className="font-semibold text-lg dark:text-white"><NavLink to="/login">Login</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 dark:bg-slate-800">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost dark:text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {link}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-10 h-10 md:w-20 md:h-20 rounded-full bg-cover" src="https://i.ibb.co/7nHmfGY/vecteezy-hand-holding-a-drop-of-blood-world-blood-donor-day-blood-19152949-removebg-preview-1.png" alt="" />
                        <h1 className="text-2xl font-semibold text-red-600 hidden md:block">Grant</h1>


                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end gap-1">
                    {/* <div className="hidden md:block dark:text-white ">
                    {
                        user && <p>{user?.email.slice(0, 10)}</p>
                    }
                </div>

                {
                    user && <img className="w-10 h-10 md:w-14 md:h-14 mx-1 rounded-full" src={user?.photoURL} alt="" />

                }
                {
                    user ? <button onClick={handelButton} className="btn">LogOut</button> : <Link to="/login" className="btn">Login</Link>
                } */}

                    {/* <input onClick={handelClick} type="checkbox" className="toggle" /> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;