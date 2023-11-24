import { FaCalendar, FaLocationArrow } from 'react-icons/fa';
import { IoTime } from "react-icons/io5";
const Card = ({ img, date, title, description, location, time }) => {
    return (

        <div className=" card-side bg-base-100 shadow-xl my-10">
            <figure><img className="w-[700px] h-[300px]" src={img} alt="Movie" /></figure>
            <div className="card-body">
                <p className="flex gap-2 items-center font-semibold"><FaCalendar className='text-red-600'></FaCalendar>{date}</p>
                <h2 className="card-title">{title}</h2>
                <p className='text-start'>{description}</p>
                <div className='flex justify-between'>
                    <p className="flex gap-2 items-center font-semibold"><IoTime className='text-red-600'></IoTime>{time}</p>
                    <p className="flex gap-2 items-center font-semibold"><FaLocationArrow className='text-red-600'></FaLocationArrow>{location}</p>
                </div>
            </div>
        </div>

    );
};

export default Card;