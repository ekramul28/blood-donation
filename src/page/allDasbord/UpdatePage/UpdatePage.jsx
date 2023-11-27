import { Link } from "react-router-dom";
import useAllDetails from "../../../hooks/useAllDetails";
import useAuth from "../../../hooks/useAuth";
import useAllDistrict from "../../../hooks/useAllDistrict";
import useAllDivision from "../../../hooks/useAllDivision";

const UpdatePage = () => {
    const [, details] = useAllDetails();
    const { user } = useAuth();
    const District = useAllDistrict();
    const AllDivision = useAllDivision();
    const handelForm = () => {

    }
    console.log(details)
    return (
        <div className="hero min-h-screen  ">
            <div className="hero-content flex-col w-80 md:w-[400px]  lg:w-[900px]">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold my-6">Update Form</h1>
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
                                    <input type="text" defaultValue={details?.recipientName} name="recipientName" placeholder="recipient name" className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Hospital name</span>
                                    </label>
                                    <input type="text" defaultValue={details?.hospitalName} name="hospitalName" placeholder="Hospital name" className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">request message</span>
                                    </label>
                                    <input type="text" defaultValue={details?.message} name="message" placeholder="request message" className="input input-bordered" required />

                                </div>

                            </div>




                            <div className='lg:w-1/2'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Division</span>
                                    </label>
                                    <select name="division" className="select select-bordered w-full  input ">
                                        <option disabled required>Select Your Division</option>
                                        {
                                            AllDivision?.map(division => <option key={division.id} defaultValue={details?.division} >{division.name}</option>)
                                        }

                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">District</span>
                                    </label>
                                    <select name="district" className="select select-bordered w-full  input ">
                                        <option disabled required>Select Your District</option>
                                        {
                                            District?.map(district => <option key={district.id} defaultValue={details?.district}>{district.name}</option>)
                                        }

                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Blood Group</span>
                                    </label>
                                    <select name="blood" defaultValue={details?.blood} className="select select-bordered w-full  input ">
                                        <option disabled >Select Your Blood Group</option>
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
                                    <input type="date" defaultValue={details?.date} placeholder="donation date" name="donationDate" className="file-input  input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Donation time</span>
                                    </label>
                                    <input type="text" name="donationTime" defaultValue={details?.donationTime} className="file-input  input-bordered" required />
                                </div>


                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-red-600 border-none text-white">Update</button>


                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatePage;