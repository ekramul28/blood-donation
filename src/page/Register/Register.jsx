import { Link } from 'react-router-dom';

const Register = () => {
    const handelForm = (e) => {

    }
    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-100 my-16">
                    <div className="hero-content flex-col w-80 md:w-[400px]  lg:w-[600px]">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Register now!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full   shadow-2xl bg-base-100">
                            <form onSubmit={handelForm} className="card-body ">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="name" name="name" placeholder="Name" className="input  input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">imgUrl</span>
                                    </label>
                                    <input type="text" placeholder="imgUrl" name="imgUrl" className="input  input-bordered" required />
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
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-yellow-500 border-none text-white">Register</button>
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