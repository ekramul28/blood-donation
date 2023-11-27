import Swal from "sweetalert2";
import UseMyDonationRequests from "../../../hooks/UseMyDonationRequests";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
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
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/delete/${id}`)
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    refetch()
                }

            }
        });

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
        <div className="overflow-x-auto mt-6">
            <div><h1 className="text-3xl text-center mb-4 font-bold"> Filter Your  Data</h1></div>
            <div className="flex">
                <select className="select text-xl font-bold select-bordered  w-3/4  ">
                    <option className="text-3xl p-4" disabled selected>Select Your Status</option>
                    <option className="text-3xl" >pending</option>
                    <option className="text-3xl" >inprogress</option>
                    <option className="text-3xl" >done</option>
                    <option className="text-3xl" >canceled</option>


                </select>
                <input className="w-1/4 text-white bg-green-500 btn" type="submit" value="Filter" />
            </div>
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
                            <td className=" ">
                                <div className="flex">
                                    <Link to={`/dashboard/update/${pending._id}`}>
                                        <button className="btn bg-green-500 text-white "><FaEdit></FaEdit></button>
                                    </Link>
                                    <button onClick={() => handleDelete(pending._id)} className="btn bg-red-500 text-white "><MdDelete></MdDelete></button>
                                </div>

                            </td>
                            {
                                (pending?.status === "inprogress") ? <>
                                    <td className="">
                                        <div className="flex ">
                                            <button onClick={() => handelDone(pending._id)} className="btn text-white bg-green-500">Done</button>
                                            <button onClick={() => handelCancel(pending._id)} className="btn text-white bg-red-500">Cancel</button>
                                        </div>
                                    </td>
                                </> : <div className="flex justify-center items-center top-4"> <h1>NotInprogress</h1></div>
                            }
                        </tr>)
                    }



                </tbody>
            </table>
        </div>
    );
};

export default MyDonationRequests;