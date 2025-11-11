import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"
import "swiper/css/navigation"
import bgimg1 from "../../assets/bannercar.png";
import bgimg2 from "../../assets/slider-1.jpg";
import bgimg3 from "../../assets/slider-3.jpg";
import bgimg5 from "../../assets/slider-2.jpg";

const Slider = () => {
  return (
    <div className="py-4 z-0 relative">
    <Swiper
      spaceBetween={40}
      modules={[Navigation, Autoplay]}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={{delay:3000}}
    >

      
        <SwiperSlide>
        <div className="w-full max-w-full h-[300px] rounded-2xl bg-white flex justify-between" style={{ backgroundImage: `url(${bgimg2})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div  className="p-6 md:p-10  items-center">
              <h2 className="font-semibold text-3xl md:pt-5">Find Affordable Dream <br /> Cars for Rental</h2>
              <p>Choose from a wide range of vehicles to suit your needs and budget.</p>

            </div>
            <div className=" flex items-center  cover">
              <img src={bgimg1} className="w-full" />
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full max-w-full h-[300px] rounded-2xl bg-white flex justify-between " style={{ backgroundImage: `url(${bgimg3})`, backgroundSize: "cover", backgroundPosition: "center" }}>
           <div className="p-6 md:p-10  items-center"> 
            <h2 className=" text-3xl md:pt-5 p-6 font-semibold">Experience the Freedom of <br /> Renting a Car Today!</h2>
            <p className="pl-6 ">Discover the joy of hassle-free travel with our reliable car rental services.</p>
           </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full max-w-full h-[300px] rounded-2xl p-6 md:p-15" style={{ backgroundImage: `url(${bgimg5})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <h2 className="text-3xl   font-semibold text-white">Luxury Dream Cars for Rental</h2>
            <p className="text-white">Embark on a stylish journey without the high costExplore our affordable dream car rentals</p>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Slider;
