import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import imageUpload from '../../api/utils';

const Register = () => {
    const [AllDivision, setDivision] = useState([])
    const [AllDistrict, setDistrict] = useState([])
    const [registerError, setRegisterError] = useState('');
    const { register, updateUserProfile } = useAuth()
    const axiosPublic = useAxiosPublic()

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
    const handelForm = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.ConfirmPassword.value;
        const division = form.division.value;
        const district = form.district.value;
        const blood = form.blood.value;
        const photoURL = form.imgUrl.files[0];
        const user = { name, email, password, confirmPassword, division, district, blood, photoURL }


        setRegisterError('')
        // if (password.length < 6) {
        //     return Swal.fire('Password must be at least 6 characters');

        // } if (!/[A-Z]/.test(password)) {
        //     return Swal.fire('Password must be a Uppercase letter');

        // }
        // if (!/[a-z]/.test(password)) {
        //     return Swal.fire('Password must be a Lowercase letter');

        // }
        // if (!/[0-9]/.test(password)) {
        //     return Swal.fire('Password must be a number ')

        // }
        // if (!(password == confirmPassword)) {
        //     return Swal.fire('password or confirmPassword not equal ')
        // }
        try {
            const image = await imageUpload(photoURL)
            const result = await register(email, password);
            await updateUserProfile(name, image?.data?.display_url)
            console.log(result.user);
            if (result?.user?.email) {
                Swal.fire('register successful ')
            }
        } catch (error) {
            setRegisterError(error.message);
        }



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
                                            <select name="division" className="select select-bordered w-full  input ">
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
                                                <span className="label-text">imgUrl</span>
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
                                        <h1 className="text-red-500">{registerError}</h1>
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