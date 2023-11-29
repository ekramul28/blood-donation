import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAllDetails from "../../hooks/useAllDetails";
import useAuth from "../../hooks/useAuth";

const DetailsPage = () => {
    const { id } = useParams();
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const [refetch, details] = useAllDetails()

    const handelConform = async () => {
        const res = await axiosSecure.patch(`/request/${id}`);
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
    const handelDonate = () => {
        document.getElementById('my_modal_5').showModal()
    }
    return (
        <div className="">
            <div className="card w-full">
                <div className="card-body text-center">
                    <h1 className="text-3xl my-4 font-bold">All Details Hear</h1>
                    <p className="text-3xl font-bold"><span className="text-red-500">Recipient Name:</span>{details?.recipientName}</p>
                    <p className="text-2xl font-bold"><span className="text-red-500">Email:</span>{details?.email}</p>
                    <p className="text-2xl font-bold"><span className="text-red-500">Hospital Name :</span>{details?.hospitalName}</p>
                    <p className="text-xl font-bold"><span className="text-red-500">Message:</span>{details?.message}</p>

                    <p className="text-xl font-bold"><span className="text-red-500">Donation Date:</span>{details?.donationDate}</p>
                    <p className="text-xl font-bold"><span className="text-red-500">Donation Time:</span>{details?.donationTime}</p>
                    <p className="text-xl font-bold"><span className="text-red-500">Status:</span>{details?.status}</p>
                    <p className="text-xl font-bold"><span className="text-red-500">Blood:</span>{details?.blood}</p>
                    <p className="text-xl font-bold"><span className="text-red-500">District:</span>{details?.district}</p>
                    <p className="text-xl font-bold"><span className="text-red-500">division:</span>{details?.division}</p>
                    <div className="flex justify-center items-center ">
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button onClick={handelDonate} className="bg-green-500 text-white btn"> Donate</button></div>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name="name" defaultValue={user?.displayName} placeholder="Name" className="input  input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" defaultValue={user?.email} name="email" className="input  input-bordered" required />
                            </div>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    {
                                        (details?.status === "pending") ? <button onClick={handelConform} className="btn bg-green-500 text-white">Conform</button> : <button className="btn bg-red-500 text-white">Already conform Close it</button>

                                    }
                                    <button className="btn bg-red-500 text-white"> Close</button>
                                </form>

                            </div>
                        </div>
                    </dialog>

                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;