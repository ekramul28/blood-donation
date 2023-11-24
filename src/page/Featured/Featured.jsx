import { MdMedicalServices } from "react-icons/md";
import Tilt from 'react-parallax-tilt';
const Featured = () => {
    return (
        <div className="lg:flex justify-between">
            <div className="lg:w-1/2 my-20">
                <Tilt>
                    <div style={{ height: '300px', backgroundColor: 'darkgreen' }}>
                        <img className="w-full h-full" src="https://i.ibb.co/hm3qp9X/5573383.jpg" alt="" />

                    </div>
                </Tilt>
            </div>
            <div className="lg:w-1/2 lg:my-20 my-10">
                <h1 className="text-5xl font-bold text-center lg:text-start">Welcome to Blood Donors Organization</h1>
                <p className="my-6 text-center lg:text-start">Blood donation is a life-saving act. Each donation can save up to three lives. Learn about the impact of blood donation and join the cause to make a difference today</p>
                <div className="flex justify-evenly lg:justify-between">
                    <div>
                        <p className="flex gap-2 items-center font-semibold"><MdMedicalServices className="text-xl" /> Good service</p>
                        <p className="flex gap-2 items-center font-semibold"><MdMedicalServices className="text-xl" /> Help people</p>
                        <p className="flex gap-2 items-center font-semibold"><MdMedicalServices className="text-xl" /> Hugine Tools</p>
                    </div>
                    <div>
                        <p className="flex gap-2 items-center font-semibold"><MdMedicalServices className="text-xl" /> 24h Service</p>
                        <p className="flex gap-2 items-center font-semibold"><MdMedicalServices className="text-xl" /> Health Check</p>
                        <p className="flex gap-2 items-center font-semibold"><MdMedicalServices className="text-xl" /> Blood Bank</p>
                    </div>
                </div>
                <div className="flex justify-center items-center lg:justify-start">
                    <button className="text-white bg-red-600 btn border-none  my-6">Explore Now</button>

                </div>
            </div>
        </div>
    );
};

export default Featured;