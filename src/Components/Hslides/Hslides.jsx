

// jfdksaslkfdla 
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// css of the slides 
import "./Hslides.css"

// images 
import Img1 from "./HslidesImages/img1.png"
import Img2 from "./HslidesImages/img2.png"
import Img3 from "./HslidesImages/img3.png"

// import required modules
// import { EffectFade, Navigation, Pagination } from "swiper";
import { Pagination, Navigation } from "swiper";


export default function App() {
  return (
    <>
    <div className="swiperr">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <div className="swImg">
          <img src={Img1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swImg">
          <img src={Img2} alt="" />
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
        <div className="swImg">
          <img src={Img3} alt="" />
          </div>
        </SwiperSlide>
        
      </Swiper>
      </div>
    </>
  );
}



// fdjkasfkkafj al;kfj 

// Import Swiper React components



// import required modules
