import Swal from "sweetalert2";
import useAllDistrict from "../../hooks/useAllDistrict";
import useAllDivision from "../../hooks/useAllDivision";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const DonationRequest = () => {
    const AllDivision = useAllDivision();
    const District = useAllDistrict();
    console.log(AllDivision)
    console.log(District)

    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const navigate = useNavigate()

    const handelForm = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const recipientName = form.recipientName.value;
        const hospitalName = form.hospitalName.value;
        const message = form.message.value;
        const division = form.division.value;
        const district = form.district.value;
        const blood = form.blood.value;
        const donationDate = form.donationDate.value;
        const donationTime = form.donationTime.value;
        const value = { name, email, recipientName, hospitalName, message, division, district, blood, donationDate, donationTime, status: "pending" }
        console.log(value);
        try {
            const data = await axiosPublic.post('/request', value)

            if (data?.data?.insertedId) {
                form.reset();
                Swal.fire('request successful ')
                navigate("/")
            }

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-100 ">
                <div className="hero-content flex-col w-80 md:w-[400px]  lg:w-[900px]">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold my-6">Donation Request Form</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full   shadow-2xl bg-base-100">
                        <form onSubmit={handelForm} className="card-body ">
                            <div className='lg:flex justify-between gap-3'>
                                <div className='lg:w-1/2'>
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
                                        <input type="email" defaultValue={user?.email} placeholder="email" name="email" className="input  input-bordered" required />
                                    </div>


                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Recipient name</span>
                                        </label>
                                        <input type="text" name="recipientName" placeholder="recipient name" className="input input-bordered" required />

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Hospital name</span>
                                        </label>
                                        <input type="text" name="hospitalName" placeholder="Hospital name" className="input input-bordered" required />

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">request message</span>
                                        </label>
                                        <input type="text" name="message" placeholder="request message" className="input input-bordered" required />

                                    </div>

                                </div>




                                <div className='lg:w-1/2'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Division</span>
                                        </label>
                                        <select name="division" className="select select-bordered w-full  input ">
                                            <option disabled selected required>Select Your Division</option>
                                            {
                                                AllDivision?.map(division => <option key={division.id}>{division.name}</option>)
                                            }

                                        </select>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">District</span>
                                        </label>
                                        <select name="district" className="select select-bordered w-full  input ">
                                            <option disabled selected required>Select Your District</option>
                                            {
                                                District?.map(district => <option key={district.id}>{district.name}</option>)
                                            }

                                        </select>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Blood Group</span>
                                        </label>
                                        <select name="blood" className="select select-bordered w-full  input ">
                                            <option disabled selected>Select Your Blood Group</option>
                                            <option >A+</option>
                                            <option >A- </option>
                                            <option >B+</option>
                                            <option >B- </option>
                                            <option >AB+ </option>
                                            <option >AB- </option>
                                            <option >O+</option>
                                            <option >O- </option>

                                        </select>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Donation date</span>
                                        </label>
                                        <input type="date" placeholder="donation date" name="donationDate" className="file-input  input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Donation time</span>
                                        </label>
                                        <input type="text" name="donationTime" className="file-input  input-bordered" required />
                                    </div>


                                </div>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-red-600 border-none text-white">Request</button>


                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationRequest;