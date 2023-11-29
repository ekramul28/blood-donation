import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Blog = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: Blogs = [] } = useQuery({
        queryKey: ["Blogs"],
        queryFn: async () => {
            const res = await axiosSecure(`/blogs`)
            return res.data;
        }

    });
    refetch();
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
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default Blog;