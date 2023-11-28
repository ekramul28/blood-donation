import { MdBloodtype } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import useUser from "../../../hooks/useUser";
const Profile = () => {
    const { user } = useAuth();

    const [data] = useUser();
    return (
        <div>
            {
                user && <>
                    <div className="">
                        <div className="mb-44">
                            <div className="absolute">
                                <img className="w-[950px]  h-[300px] bg-cover" src="https://i.ibb.co/gmV8DHG/blue-smooth-wall-textured-background.jpg" alt="" />

                            </div>
                            <div className="">
                                <img className="rounded-full w-52 h-52 relative mx-auto top-48" src={data.photoURL} alt="" />
                            </div>

                        </div>
                        <div className="my-4 text-center p-2">
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