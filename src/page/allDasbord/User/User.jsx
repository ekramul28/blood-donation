import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { GoDotFill } from "react-icons/go";
const User = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Avatar
                            </th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Handel</th>
                            <th>Volunteer</th>
                            <th>Admin</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map(allUser => <tr key={allUser._id}>
                                <th>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={allUser?.photoURL} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">

                                        <div>
                                            <div className="font-bold">{allUser?.Email}</div>
                                            <div className="text-sm opacity-50">{allUser?.Name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        {/*  */}
                                        <div>
                                            <div className="font-bold flex items-center">{(allUser?.Status === 'Active') ? <GoDotFill className="text-green-600"></GoDotFill> : <GoDotFill className="text-red-600"></GoDotFill>}
                                                {allUser?.Status}</div>
                                            {/* <div className="text-sm opacity-50">{allUser?.Name}</div> */}
                                        </div>
                                    </div>
                                </td>
                                <td className="flex gap-1">
                                    {
                                        (allUser?.Status === 'Active') ? <button className="btn bg-red-600 text-white">Block</button> : <button className="btn bg-green-600 text-white">Active</button>
                                    }

                                </td>
                                <td>  {
                                    (allUser.Status === 'Volunteer') ? "Volunteer" : <button className="btn ">Make Volunteer</button>

                                }</td>
                                <th>
                                    {
                                        (allUser.Status === 'Admin') ? "Admin" : <button className="btn ">Make Admin</button>

                                    }
                                </th>
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default User;