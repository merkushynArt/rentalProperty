import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Modal = (props) => {
   return (
      <div className={`modal__wrapper ${props.isOpen ? 'open' : 'close'}`}>
         <div className='modal__close' onClick={props.modalClose}>x</div>

         <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
               clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper__modal"
            >
            <SwiperSlide><img src={props.img[0]} alt=""/></SwiperSlide>
            <SwiperSlide><img src={props.img[1]} alt=""/></SwiperSlide>
            <SwiperSlide><img src={props.img[2]} alt=""/></SwiperSlide>
            <SwiperSlide><img src={props.img[3]} alt=""/></SwiperSlide>
            <SwiperSlide><img src={props.img[4]} alt=""/></SwiperSlide>
            <SwiperSlide><img src={props.img[5]} alt=""/></SwiperSlide>
            <SwiperSlide><img src={props.img[6]} alt=""/></SwiperSlide>
         </Swiper>
      </div>
   )
}
