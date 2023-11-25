import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { MdBloodtype } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Profile = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data = [] } = useQuery({
        queryKey: ['data', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${user?.email}`);
            return res.data;
        }
    })
    return (
        <div>
            {
                user && <>
                    <div className="bg-base-200">
                        <div className="mb-80">
                            <img className="w-full absolute h-[400px] bg-cover" src="https://i.ibb.co/gmV8DHG/blue-smooth-wall-textured-background.jpg" alt="" />
                            <div className="">
                                <img className="rounded-full w-52 h-52 relative mx-auto top-72" src={data.photoURL} alt="" />
                            </div>

                        </div>
                        <div className="my-8 text-center p-2">
                            <h1 className="text-3xl font-bold text-center p-2 mt-6">Hi,{data.Name}</h1>
                            <h1 className="text-2xl font-bold text-center p-2 text-red-600 mt-6">{data.Role}</h1>
                            <p className="text-xl font-semibold p-2 flex justify-center items-center gap-3"><MdEmail></MdEmail> Email:{data?.Email}</p>
                            <p className="text-xl font-semibold p-2 flex justify-center items-center gap-3"><FaHome></FaHome> Division:{data?.Division}</p>
                            <p className="text-xl font-semibold p-2 flex justify-center items-center gap-3"><FaHome></FaHome> District:{data?.District}</p>
                            <p className="text-xl font-semibold p-2 flex justify-center items-center gap-3"><MdBloodtype></MdBloodtype> Blood:{data?.Blood}</p>
                        </div>
                        <p></p>

                    </div>
                </>
            }
        </div>
    );
};

export default Profile;