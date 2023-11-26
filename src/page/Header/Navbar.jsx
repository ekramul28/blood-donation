import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { CgProfile } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";
import { FiLogIn } from "react-icons/fi";
const Navbar = () => {
    const { user, Logout } = useAuth();
    const handelButton = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, LogOut'
        }).then((result) => {
            if (result.isConfirmed) {
                Logout()
                    .then(result => {
                        console.log(result);
                        Swal.fire('Logout succesfull');
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        })

    }
    const link = <>
        <li className="font-semibold text-lg dark:text-white"><NavLink to="/"> Home</NavLink></li>
        <li className="font-semibold text-lg dark:text-white"><NavLink to="/request"> Donation requests</NavLink></li>
        <li className="font-semibold text-lg dark:text-white"><NavLink to="/blog"> Blog</NavLink></li>
        <li className="font-semibold text-lg dark:text-white"><NavLink to="/dashboard/dashboards">Dashboard</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar z-50 bg-base-100 dark:bg-slate-800">
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
                    <div className="hidden md:block dark:text-white ">
                        {
                            user && <p className="font-semibold">{user?.displayName}</p>
                        }
                    </div>

                    {
                        user && <>

                            <details className="dropdown dropdown-bottom dropdown-end">
                                <summary className="flex "><img className="w-10 h-10 md:w-14 md:h-14 mx-1 rounded-full" src={user?.photoURL} alt="" /></summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <Link to="/dashboard/profile" className="flex justify-center items-center text-xl mt-3 btn"><CgProfile></CgProfile> Profile</Link>
                                    <button onClick={handelButton} className="btn mt-8 bg-red-600 text-white"><TbLogout></TbLogout> LogOut</button>
                                </ul>
                            </details>
                        </>

                    }
                    {
                        user ? "" : <Link to="/login" className="btn bg-red-600 text-white"><FiLogIn></FiLogIn> Login</Link>
                    }
                    {/* {
                        user ? <button onClick={handelButton} className="btn">LogOut</button> : <Link to="/login" className="btn">Login</Link>
                    } */}

                </div>
            </div>
        </div>
    );
};

export default Navbar;