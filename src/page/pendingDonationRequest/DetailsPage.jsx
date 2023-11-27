import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAllDetails from "../../hooks/useAllDetails";

const DetailsPage = () => {
    const { id } = useParams();
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
                    <div className="card-actions justify-end">
                        {
                            (details?.status === "pending") ? <button onClick={handelConform} className="btn btn-primary">Conform</button> : <button disabled className="btn btn-primary">Conform</button>


                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;