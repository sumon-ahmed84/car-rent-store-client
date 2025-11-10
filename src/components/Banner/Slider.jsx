import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"
import "swiper/css/navigation"

const Slider = () => {
  return (
    <div className="py-4 z-0 relative">
    <Swiper
      spaceBetween={40}
      modules={[Navigation, Autoplay]}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={{delay:2000}}
    >

      
        <SwiperSlide>
        <div className="w-full max-w-full h-[250px] rounded-2xl bg-amber-200">
            <h2 className="text-lg font-bold">Hero 1</h2>
            <p className="text-sm">This is the description for Hero 1.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full max-w-full h-[250px] rounded-2xl bg-amber-700">
            <h2 className="text-lg font-bold">Hero 2</h2>
            <p className="text-sm">This is the description for Hero 2.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full max-w-full h-[250px] rounded-2xl bg-amber-900">
            <h2 className="text-lg font-bold">Hero 2</h2>
            <p className="text-sm">This is the description for Hero 2.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full max-w-full h-[250px] rounded-2xl bg-amber-500">
            <h2 className="text-lg font-bold">Hero 2</h2>
            <p className="text-sm">This is the description for Hero 2.</p>
        </div>
      </SwiperSlide>
     
      
    </Swiper>
    </div>
  );
};

export default Slider;
