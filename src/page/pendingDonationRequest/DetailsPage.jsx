import { useLoaderData } from "react-router-dom";

const DetailsPage = () => {
    const donner = useLoaderData();
    return (
        <div className="">
            <div className="card w-full">
                <div className="card-body text-center">
                    <h1 className="text-3xl my-4 font-bold">All Details Hear</h1>
                    <p className="text-3xl font-bold"><span className="text-red-500">Recipient Name:</span>{donner?.recipientName}</p>
                    <p className="text-2xl font-bold"><span className="text-red-500">Email:</span>{donner?.email}</p>
                    <p className="text-2xl font-bold"><span className="text-red-500">Hospital Name :</span>{donner?.hospitalName}</p>
                    <p className="text-xl font-bold"><span className="text-red-500">Message:</span>{donner?.message}</p>

                    <p className="text-xl font-bold"><span className="text-red-500">Donation Date:</span>{donner?.donationDate}</p>
                    <p className="text-xl font-bold"><span className="text-red-500">Donation Time:</span>{donner?.donationTime}</p>
                    <p className="text-xl font-bold"><span className="text-red-500">Status:</span>{donner?.status}</p>
                    <p className="text-xl font-bold"><span className="text-red-500">Blood:</span>{donner?.blood}</p>
                    <p className="text-xl font-bold"><span className="text-red-500">District:</span>{donner?.district}</p>
                    <p className="text-xl font-bold"><span className="text-red-500">division:</span>{donner?.division}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;