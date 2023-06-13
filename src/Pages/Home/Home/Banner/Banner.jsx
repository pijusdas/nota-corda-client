import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import './Banner.css'

const Banner = () => {
    return (
        <div >
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide >
                    <div className="swiper-slide-container ">
                        <img className=" w-full max-h-screen" src="https://plus.unsplash.com/premium_photo-1661381045420-cdc071c110eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                        <div className="swiper-slide-content flex justify-center items-center h-full w-full  bg-slate-600 bg-opacity-30">
                            <div >
                                <h1 className="text-6xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-sky-300 to-sky-500">Welcome to <br /> Our Music School</h1>
                                <p className=" font-bold text-white text-start ">Unlock your musical potential with our <br /> comprehensive range of classes and experienced instructors.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide-container">
                        <img className="w-full max-h-screen" src="https://plus.unsplash.com/premium_photo-1661376659383-b7b7909498b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                        <div className="swiper-slide-content flex justify-center items-center h-full w-full  bg-slate-600 bg-opacity-30">
                           <div>
                           <h1 className="text-6xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-sky-300 to-sky-500">Join Our <br /> Harmonious Community</h1>
                            <p className=" font-bold text-white text-start  ">Experience the joy of singing together and <br /> explore the power of vocal harmonies in our vibrant choir program</p>
                           </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide-container">
                        <img className="w-full max-h-screen" src="https://plus.unsplash.com/premium_photo-1661392967173-712c58028805?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                        <div className="swiper-slide-content flex justify-center items-center h-full w-full  bg-slate-600 bg-opacity-30">
                          <div>
                          <h1 className="text-6xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-sky-300 to-sky-500">Strum Your <br /> Way to Success</h1>
                            <p className="font-bold text-white text-start ">Become a skilled guitarist through our <br /> comprehensive guitar lessons, covering a wide range of genres and techniques.</p>
                          </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide-container">
                        <img className="w-full max-h-screen" src="https://plus.unsplash.com/premium_photo-1661394951751-e3adbbb41ae9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                        <div className="swiper-slide-content flex justify-center items-center h-full w-full  bg-slate-600 bg-opacity-30">
                            <div>
                            <h1 className="text-6xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-sky-300 to-sky-500">Unleash <br /> Your Rhythm</h1>
                            <p className="font-bold text-white text-start ">Discover the art of drumming and find your groove in our <br /> dynamic percussion classes for beginners and advanced players</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide-container">
                        <img className="w-full max-h-screen" src="https://plus.unsplash.com/premium_photo-1661389875488-dc9f31cc1930?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                        <div className="swiper-slide-content flex justify-center items-center h-full w-full  bg-slate-600 bg-opacity-30">
                            <div>
                            <h1 className="text-6xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-sky-300 to-sky-500">Discover <br /> Your Musical Journey</h1>
                            <p className="font-bold text-white text-start  ">Unlock your musical potential with our comprehensive <br /> range of classes and experienced instructors.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;