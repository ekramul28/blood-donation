import Swal from "sweetalert2";
import imageUpload from "../../api/utils";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AddBlog = () => {
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const { user } = useAuth()
    const handelForm = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const content = form.content.value;
        const image = form.image.files[0];
        try {
            const imageBB = await imageUpload(image);
            const imageUrl = imageBB?.data?.display_url
            const blog = { title, content, imageUrl, email: user?.email }
            const res = await axiosSecure.post('blogs', blog)
            if (res.data.insertedId) {
                // Swal.fire({
                //     position: "top-end",
                //     icon: "success",
                //     title: "Your work has been saved",
                //     showConfirmButton: false,
                //     timer: 1500
                // });
                // form.reset()
                navigate('/dashboard/content')
            }

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className="hero min-h-screen flex justify-center items-center">
            <div className="hero-content flex-col ">
                <div>
                    <h1 className="text-3xl font-bold text-center">Add Blog</h1>
                </div>
                <div className="card flex-shrink-0 w-full   shadow-2xl bg-base-100">
                    <form onSubmit={handelForm} className="card-body w-80 md:w-[400px]  lg:w-[500px]">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" placeholder="title" name="title" className="input  input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Thumbnail image</span>
                            </label>
                            <input type="file" placeholder="title" name="image" className="  input-bordered file-input" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Content</span>
                            </label>
                            <textarea className=" border-2 rounded" required name="content" id="" cols="30" rows="8"></textarea>
                            {/* <input type="" name="content" placeholder="password"  /> */}

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn  text-white bg-red-600 border-none">Add</button>


                        </div>
                    </form>

                </div>
                {/* <div onClick={googleClick} className=" border-2 border-white p-4 rounded-xl mt-5">
                <p className="flex justify-center items-center gap-3 text-xl font-semibold text-white"><FcGoogle /> Continue With Google</p>
            </div> */}
            </div>
        </div>
    );
};

export default AddBlog;