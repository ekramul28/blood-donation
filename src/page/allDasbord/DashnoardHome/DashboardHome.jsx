import Swal from "sweetalert2";
import UseMyDonationRequests from "../../../hooks/UseMyDonationRequests";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Welcome from "../../../shared/Welcome/Welcome";
import { Link } from "react-router-dom";

const DashboardHome = () => {
    const [donner, refetch] = UseMyDonationRequests();
    const data = donner.slice(0, 3)
    const axiosSecure = useAxiosSecure();
    const handelDone = async (id) => {
        const res = await axiosSecure.patch(`/request/done/${id}`);
        console.log(res.data)
        if (res.data.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Done",
                showConfirmButton: false,
                timer: 1500

            });
            refetch()
        }

    }
    const handelCancel = async (id) => {
        const res = await axiosSecure.patch(`/request/cancel/${id}`);
        console.log(res.data)
        if (res.data.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Done",
                showConfirmButton: false,
                timer: 1500

            });
            refetch()
        }
    }
    return (
        <div>
            <Welcome></Welcome>
            {
                (data.length > 0) ? <>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="bg-red-500 text-white">
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Division</th>
                                    <th>District </th>
                                    <th>DonationDate </th>
                                    <th>donationTime </th>
                                    <th>Status</th>
                                    <th>Done</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((pending, index) => <tr key={pending._id} className="bg-base-200">
                                        <th>{index + 1}</th>
                                        <td>{pending?.name}</td>
                                        <td>{pending?.division}</td>
                                        <td>{pending?.district}</td>
                                        <td>{pending?.donationDate}</td>
                                        <td>{pending?.donationTime}</td>
                                        <td>{pending?.status}</td>
                                        {
                                            (pending?.status === "inprogress") ? <>
                                                <td className="">
                                                    <button onClick={() => handelDone(pending._id)} className="btn text-white bg-green-500">Done</button>
                                                    <button onClick={() => handelCancel(pending._id)} className="btn text-white bg-red-500">Cancel</button>
                                                </td>
                                            </> : ""
                                        }

                                    </tr>)
                                }



                            </tbody>
                        </table>
                        <div className="flex justify-center items-center mt-4">
                            <Link to="/dashboard/myDonationRequests">
                                <button className="btn bg-red-500 text-white ">See All</button>

                            </Link>
                        </div>

                    </div>
                </> : ""
            }
        </div>
    );
};

export default DashboardHome;