import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './style.css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Card from './card';
const PopularCampaigns = () => {
    return (
        <div>
            <h1 className="text-center text-red-600 text-xl">Donate Now </h1>
            <h1 className="text-center font-bold text-4xl">Popular Campaigns</h1>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div className='lg:flex justify-between items-center gap-3'>
                        <div className='lg:w-1/2'>
                            <Card
                                img={"https://i.ibb.co/4YdHsZ0/surgeon-holding-blood-test.jpg"}
                                date={"24 December,2023"}
                                title={'Free group Cheacking'}
                                description={'Blood donation is a life-saving act. Each donation can save up to three lives. Learn about the impact of blood donation and join the cause to make a difference today'}
                                time={'10.00-4.00'}
                                location={"Chowgacha 40,jessore"}
                            ></Card>
                        </div>
                        <div className='lg:w-1/2'>
                            <Card
                                img={"https://i.ibb.co/f0hQCzK/friendly-hospital-phlebotomist-collecting-blood-sample-from-patient-lab-preparation-blood-test-by-fe.jpg"}
                                date={"25 December,2023"}
                                title={'Free group Cheacking'}
                                description={'Blood donation is a life-saving act. Each donation can save up to three lives. Learn about the impact of blood donation and join the cause to make a difference today'}
                                time={'10.00 - 4.00'}
                                location={"chowjacha 40,jessore"}
                            ></Card>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lg:flex justify-between items-center'>
                        <div className='lg:w-1/2'>
                            <Card
                                img={"https://i.ibb.co/4YdHsZ0/surgeon-holding-blood-test.jpg"}
                                date={"24 December,2023"}
                                title={'Free group Cheacking'}
                                description={'Blood donation is a life-saving act. Each donation can save up to three lives. Learn about the impact of blood donation and join the cause to make a difference today'}
                                time={'10.00-4.00'}
                                location={"Chowgacha 40,jessore"}
                            ></Card>
                        </div>
                        <div className='lg:w-1/2'>
                            <Card
                                img={"https://i.ibb.co/4YdHsZ0/surgeon-holding-blood-test.jpg"}
                                date={"24 December,2023"}
                                title={'Free group Cheacking'}
                                description={'Blood donation is a life-saving act. Each donation can save up to three lives. Learn about the impact of blood donation and join the cause to make a difference today'}
                                time={'10.00-4.00'}
                                location={"Chowgacha 40,jessore"}
                            ></Card>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lg:flex justify-between items-center'>
                        <div className='lg:w-1/2'>
                            <Card
                                img={"https://i.ibb.co/4YdHsZ0/surgeon-holding-blood-test.jpg"}
                                date={"24 December,2023"}
                                title={'Free group Cheacking'}
                                description={'Blood donation is a life-saving act. Each donation can save up to three lives. Learn about the impact of blood donation and join the cause to make a difference today'}
                                time={'10.00-4.00'}
                                location={"Chowgacha 40,jessore"}
                            ></Card>
                        </div>
                        <div className='lg:w-1/2'>
                            <Card
                                img={"https://i.ibb.co/4YdHsZ0/surgeon-holding-blood-test.jpg"}
                                date={"24 December,2023"}
                                title={'Free group Cheacking'}
                                description={'Blood donation is a life-saving act. Each donation can save up to three lives. Learn about the impact of blood donation and join the cause to make a difference today'}
                                time={'10.00-4.00'}
                                location={"Chowgacha 40,jessore"}
                            ></Card>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>



        </div>

    );
};

export default PopularCampaigns;