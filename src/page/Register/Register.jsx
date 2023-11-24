import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
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
    const handelForm = (e) => {

    }
    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-100 ">
                    <div className="hero-content flex-col w-80 md:w-[400px]  lg:w-[900px]">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold my-6">Register now!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full   shadow-2xl bg-base-100">
                            <form onSubmit={handelForm} className="card-body ">
                                <div className='lg:flex justify-between gap-3'>
                                    <div className='lg:w-1/2'>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="name" name="name" placeholder="Name" className="input  input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" placeholder="email" name="email" className="input  input-bordered" required />
                                        </div>


                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Confirm Password</span>
                                            </label>
                                            <input type="password" name="ConfirmPassword" placeholder="Confirm Password" className="input input-bordered" required />

                                        </div>

                                    </div>




                                    <div className='lg:w-1/2'>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Division</span>
                                            </label>
                                            <select className="select select-bordered w-full  input ">
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
                                                <span className="label-text">imgUrl</span>
                                            </label>
                                            <select className="select select-bordered w-full  input ">
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
                                                <span className="label-text">imgUrl</span>
                                            </label>
                                            <input type="file" placeholder="imgUrl" name="imgUrl" className="file-input  input-bordered" required />
                                        </div>

                                    </div>
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn bg-red-600 border-none text-white">Register</button>
                                    <div className="mt-3">
                                        <p className="text-xl">you have Account  please<Link to="/login" className="text-red-600 text-2xl ml-3">login</Link></p>
                                    </div>
                                    <div className="text-center">
                                        <h1 className="text-red-500">registerError</h1>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;