import { FaLocationArrow, FaPhone } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import Tilt from 'react-parallax-tilt';

const ContactUs = () => {
    return (
        <div>
            <div className="hero h-[800px] lg:h-[600px] " style={{ backgroundImage: 'url(https://i.ib.co/C9FpfCZ/tp227-poster-12-googlefocus.jpg)' }}>
                <div className="hero-overlay bg-opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold ">Contact Us</h1>
                        <p className="mb-5">Call our toll-free number or visit our website to connect with our dedicated customer service team. Were here to assist you 24/7.</p>
                        <div className="lg:flex justify-between items-center">
                            <div className='w-1/2'>
                                <div className='flex  items-center'>
                                    <div className='bg-white m-4 rounded-full h-10 w-10 flex justify-center items-center '>
                                        <FaLocationArrow className='font-xl text-black'></FaLocationArrow>
                                    </div>
                                    <div className='text-start'>
                                        <h1>Address</h1>
                                        <p>4567 Chowgacha Rode,jessore,500938</p>
                                    </div>
                                </div>
                                <div className='flex  items-center'>
                                    <div className='bg-white m-4 rounded-full h-10 w-10 flex justify-center items-center '>
                                        <FaPhone className='font-xl text-black'></FaPhone>

                                    </div>
                                    <div className='text-start'>
                                        <h1>Phone</h1>
                                        <p>+8801762477828</p>
                                    </div>
                                </div>
                                <div className='flex  items-center'>
                                    <div className='bg-white m-4 rounded-full h-10 w-10 flex justify-center items-center '>

                                        <MdEmail className='font-xl text-black'></MdEmail>
                                    </div>
                                    <div className='text-start'>
                                        <h1>Email</h1>
                                        <p>mdekramulhassan168@gamil.com</p>
                                    </div>
                                </div>
                            </div>
                            <Tilt className="text-start w-1/2">
                                <div style={{ height: '300px', backgroundColor: 'darkgreen' }}>
                                    <div >
                                        <div className="bg-white p-14  ">
                                            <h1 className="text-black text-xl my-2">send Message</h1>
                                            <input className="border-b-2 border-black my-3 w-full" type="text" name="name" id="" placeholder="Full Name" /> <br />
                                            <input className="border-b-2 border-black my-3 w-full" placeholder="Email" type="text" name="email" id="" /><br />
                                            <input className="border-b-2 border-black my-3 w-full" type="text" placeholder="Type Your Message" name="message" id="" /><br />
                                            <input className='text-white bg-red-600 btn border-none my-3' type="submit" value="Send" />
                                        </div>

                                    </div>
                                </div>
                            </Tilt>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;