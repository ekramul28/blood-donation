import { FaSearch } from 'react-icons/fa';
import { BiSolidDonateBlood } from "react-icons/bi";
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div>
            <div className="hero h-[500px] bg-fixed" style={{ backgroundImage: 'url(https://i.ibb.co/C9FpfCZ/tp227-poster-12-googlefocus.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl md:text-5xl font-bold ">Save lives, donate blood!</h1>
                        <p className="mb-5">Join the grant Blood Donation Drive today. Your contribution can make a significant impact. Be a hero, be a donor. Visit our website or nearest grant store to participate and make a difference.</p>
                        <div className='flex gap-3 justify-center '>
                            <Link to="/register">
                                <button className='text-white bg-red-600 btn border-none'><BiSolidDonateBlood></BiSolidDonateBlood> Join as a donor</button>
                            </Link>
                            <Link to="/search page">
                                <button className='text-white bg-red-600 btn border-none'><FaSearch></FaSearch> Search Donors</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;