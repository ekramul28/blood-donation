import useAllDivision from "../../hooks/useAllDivision";
import useAllDistrict from "../../hooks/useAllDistrict";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchPage = () => {
    const AllDivision = useAllDivision();
    const AllDistrict = useAllDistrict();
    const axiosPublic = useAxiosPublic();
    const [search, setSearch] = useState([]);
    const handelForm = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const division = form.division.value;
        const district = form.district.value;
        const blood = form.blood.value
        const value = { email, district, division, blood };
        console.log(value);
        const res = await axiosPublic.get(`/search?email=${email}&division=${division}&district=${district}&blood=${blood}`)
        setSearch(res?.data);

    }
    return (
        <div className="flex">
            <div className=" ">
                <div className="  drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        {/* Page content here */}

                    </div>
                    <div className="drawer-side z-0">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4  min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <form onSubmit={handelForm}>
                                <select name="blood" className="select select-bordered input w-full " required>
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
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Division</span>
                                    </label>
                                    <select name="division" className="select select-bordered w-full  input " required>
                                        <option disabled selected required>Select Your Division</option>
                                        {
                                            AllDivision.map(division => <option key={division.id}>{division.name}</option>)
                                        }

                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Division</span>
                                    </label>
                                    <select name="district" className="select select-bordered w-full  input ">
                                        <option disabled selected required>Select Your District</option>
                                        {
                                            AllDistrict.map(district => <option key={district.id}>{district.name}</option>)
                                        }

                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name="email" className="input  input-bordered" required />
                                </div>
                                <div className="flex items-center justify-center mt-4">

                                    <input type="submit" value="Search" className="btn bg-red-600 border-none text-white" />

                                </div>
                            </form>
                        </ul>

                    </div>
                </div>
            </div>
            {
                search.length > 0 ? <>


                    <div className="">
                        <table className="table ">
                            {/* head */}
                            <thead className="">
                                <tr className="bg-red-500 text-white w-full">
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Division</th>
                                    <th>District </th>
                                    <th>DonationDate </th>
                                    <th>donationTime </th>
                                    <th>Status</th>
                                    <th>Details </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    search.map((pending, index) => <tr key={pending._id} className="bg-base-200">
                                        <th>{index + 1}</th>
                                        <td>{pending?.name}</td>
                                        <td>{pending?.division}</td>
                                        <td>{pending?.district}</td>
                                        <td>{pending?.donationDate}</td>
                                        <td>{pending?.donationTime}</td>
                                        <td>{pending?.status}</td>
                                        <Link to={`/details/${pending._id}`}>
                                            <button className="btn mt-1 bg-green-500 text-white">Details</button>
                                        </Link>
                                    </tr>)
                                }



                            </tbody>
                        </table>
                    </div>

                </> : ""
            }

        </div>

    );
};

export default SearchPage;