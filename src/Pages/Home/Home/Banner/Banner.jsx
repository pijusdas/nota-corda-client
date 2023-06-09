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
                        <div className="swiper-slide-content">
                            <h1 className="text-6xl  font-black">Welcome to Our Music School</h1>
                            <p className=" font-bold text-slate-600 ">Unlock your musical potential with our comprehensive range of classes and experienced instructors.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide-container">
                        <img className="w-full max-h-screen" src="https://plus.unsplash.com/premium_photo-1661376659383-b7b7909498b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                        <div className="swiper-slide-content">
                            <h1 className="text-6xl  font-black">Join Our Harmonious Community</h1>
                            <p className=" font-bold text-slate-600 ">Experience the joy of singing together and explore the power of vocal harmonies in our vibrant choir program</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide-container">
                        <img className="w-full max-h-screen" src="https://plus.unsplash.com/premium_photo-1661392967173-712c58028805?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                        <div className="swiper-slide-content">
                            <h1 className="text-6xl  font-black">Strum Your Way to Success</h1>
                            <p className=" font-bold text-slate-600 ">Become a skilled guitarist through our comprehensive guitar lessons, covering a wide range of genres and techniques.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide-container">
                        <img className="w-full max-h-screen" src="https://plus.unsplash.com/premium_photo-1661394951751-e3adbbb41ae9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                        <div className="swiper-slide-content">
                            <h1 className="text-6xl  font-black">Unleash Your Rhythm</h1>
                            <p className=" font-bold text-slate-600 ">Discover the art of drumming and find your groove in our dynamic percussion classes for beginners and advanced players</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide-container">
                        <img className="w-full max-h-screen" src="https://plus.unsplash.com/premium_photo-1661389875488-dc9f31cc1930?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                        <div className="swiper-slide-content">
                            <h1 className="text-6xl  font-black">Discover Your Musical Journey</h1>
                            <p className=" font-bold text-slate-600 ">Unlock your musical potential with our comprehensive range of classes and experienced instructors.</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;