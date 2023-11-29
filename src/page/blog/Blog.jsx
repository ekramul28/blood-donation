import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Blog = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { refetch, data: Blogs = [] } = useQuery({
        queryKey: ["Blogs"],
        queryFn: async () => {
            const res = await axiosSecure(`/blogs`)
            return res.data;
        }

    });
    refetch();
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/blogs/${id}`)
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    refetch()
                }

            }
        });

    }
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 ml-4  my-10">
            {
                Blogs.map(blog => <div key={blog._id} className="card  bg-base-100 shadow-xl">
                    <figure><img src={blog?.imageUrl} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {blog?.title}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{blog?.content}</p>
                        {
                            user?.email === blog?.email ? <>
                                <div className="card-actions justify-end">

                                    {/* <Link to={`/dashboard/update/${pending._id}`}> */}
                                    <button className="btn bg-green-500 text-white ">Edit</button>
                                    {/* </Link> */}
                                    <button onClick={() => handleDelete(blog._id)} className="btn bg-red-500 text-white ">Delete</button>


                                </div>
                            </> : ''
                        }

                    </div>
                </div>)
            }

        </div>
    );
};

export default Blog;