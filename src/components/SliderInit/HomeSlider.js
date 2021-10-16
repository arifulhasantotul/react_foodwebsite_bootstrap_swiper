import React from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import pic01 from "../../images/home-img-1.png";
import pic02 from "../../images/home-img-2.png";
import pic03 from "../../images/home-img-3.png";
import "./HomeSlider.css";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const HomeSlider = () => {
   return (
      <>
         <Swiper
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            spaceBetween={30}
            pagination={{
               dynamicBullets: true,
            }}
            navigation={true}
            className="home_slider pt-5"
         >
            <SwiperSlide className="d-flex justify-content-around align-items-center">
               <div className="slider_item">
                  <span className="slider_head">our special dish</span>
                  <h3 className="slider_title">spicy noodles</h3>
                  <p className="slider_text">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Aut dolorem quasi quisquam.
                  </p>
               </div>
               <img className="img-fluid" src={pic01} alt="" />
            </SwiperSlide>
            <SwiperSlide className="d-flex justify-content-around align-items-center">
               <div className="slider_item">
                  <span className="slider_head">our special dish</span>
                  <h3 className="slider_title">spicy noodles</h3>
                  <p className="slider_text">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Aut dolorem quasi quisquam.
                  </p>
               </div>
               <img className="img-fluid" src={pic02} alt="" />
            </SwiperSlide>
            <SwiperSlide className="d-flex justify-content-around align-items-center">
               <div className="slider_item">
                  <span className="slider_head">our special dish</span>
                  <h3 className="slider_title">spicy noodles</h3>
                  <p className="slider_text">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Aut dolorem quasi quisquam.
                  </p>
               </div>
               <img className="img-fluid" src={pic03} alt="" />
            </SwiperSlide>
         </Swiper>
      </>
   );
};

export default HomeSlider;
