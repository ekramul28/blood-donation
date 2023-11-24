import axios from "axios";
import { useEffect, useState } from "react";

const SearchPage = () => {
    const [AllDivision, setDivision] = useState([])
    const [AllDistrict, setDistrict] = useState([])
    useEffect(() => {
        axios.get('devision.json')
            .then(res => {
                setDivision(res.data);
            })
    }, [])
    useEffect(() => {
        axios.get('distict.json')
            .then(res => {
                setDistrict(res.data);
            })
    }, [])
    return (
        <div className="lg:flex">
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
                            <form>
                                <select className="select select-bordered input w-full " required>
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
                                    <select className="select select-bordered w-full  input " required>
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
                                    <select className="select select-bordered w-full  input ">
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
            <div className="">
                ok
            </div>
        </div>
    );
};

export default SearchPage;