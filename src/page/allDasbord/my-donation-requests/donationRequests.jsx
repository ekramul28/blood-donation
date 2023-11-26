import UseMyDonationRequests from "../../../hooks/UseMyDonationRequests";

const MyDonationRequests = () => {

    const [donner] = UseMyDonationRequests()
    console.log(donner)
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

                    </tr>
                </thead>
                <tbody>
                    {
                        donner.map((pending, index) => <tr key={pending._id} className="bg-base-200">
                            <th>{index + 1}</th>
                            <td>{pending?.name}</td>
                            <td>{pending?.division}</td>
                            <td>{pending?.district}</td>
                            <td>{pending?.donationDate}</td>
                            <td>{pending?.donationTime}</td>
                            <td>{pending?.status}</td>

                        </tr>)
                    }



                </tbody>
            </table>
        </div>
    );
};

export default MyDonationRequests;