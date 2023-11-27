import Swal from "sweetalert2";
import UseMyDonationRequests from "../../../hooks/UseMyDonationRequests";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
const MyDonationRequests = () => {

    const [donner, refetch] = UseMyDonationRequests()
    console.log(donner)
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
                        <th>Edit</th>
                        <th>Done</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        donner?.map((pending, index) => <tr key={pending._id} className="bg-base-200">
                            <th>{index + 1}</th>
                            <td>{pending?.name}</td>
                            <td>{pending?.division}</td>
                            <td>{pending?.district}</td>
                            <td>{pending?.donationDate}</td>
                            <td>{pending?.donationTime}</td>
                            <td>{pending?.status}</td>
                            <td>
                                <Link to={`/dashboard/update/${pending._id}`}>
                                    <button className="btn bg-green-500 text-white"><FaEdit></FaEdit></button>

                                </Link>
                            </td>
                            {
                                (pending?.status === "inprogress") ? <>
                                    <td className="flex gap-1">
                                        <button onClick={() => handelDone(pending._id)} className="btn text-white bg-green-500">Done</button>
                                        <button onClick={() => handelCancel(pending._id)} className="btn text-white bg-red-500">Cancel</button>
                                    </td>
                                </> : ""
                            }
                        </tr>)
                    }



                </tbody>
            </table>
        </div>
    );
};

export default MyDonationRequests;