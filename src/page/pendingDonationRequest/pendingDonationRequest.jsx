import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const PendingDonationRequest = () => {

    const axiosSecure = useAxiosSecure();
    const { data: pendingData = [] } = useQuery({
        queryKey: ["data"],
        queryFn: async () => {
            const res = await axiosSecure('/pending')
            return res.data;
        }

    });

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
                        <th>Details </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pendingData.map((pending, index) => <tr key={pending._id} className="bg-base-200">
                            <th>{index + 1}</th>
                            <td>{pending.name}</td>
                            <td>{pending.division}</td>
                            <td>{pending.district}</td>
                            <td>{pending.donationDate}</td>
                            <td>{pending.donationTime}</td>
                            <Link to={`/details/${pending._id}`}>
                                <button className="btn mt-1 bg-green-500 text-white">Details</button>
                            </Link>
                        </tr>)
                    }



                </tbody>
            </table>
        </div>
    );
};

export default PendingDonationRequest;