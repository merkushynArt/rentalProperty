import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../utils/axios.js';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const ApartmentPage = () => {
   const [apartment, setApartment] = useState(null);

   const params = useParams()

   const fetchApartment = useCallback(async () => {
      const { data } = await axios.get(`/apartments/${params.id}`)
      setApartment(data);
   }, [params.id]);

   useEffect(() => {
      fetchApartment()
   }, [fetchApartment]);

   if (!apartment) {
      return (
         <div className='text-xl text-center text-white py-10'>
            Загрузка...
         </div>
      )
   }
   return (
      <div className='apartment-page'>
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
            <SwiperSlide><img src={apartment.img[0]} alt=""/></SwiperSlide>
            <SwiperSlide><img src={apartment.img[1]} alt=""/></SwiperSlide>
            <SwiperSlide><img src={apartment.img[2]} alt=""/></SwiperSlide>
            <SwiperSlide><img src={apartment.img[3]} alt=""/></SwiperSlide>
            <SwiperSlide><img src={apartment.img[4]} alt=""/></SwiperSlide>
            <SwiperSlide><img src={apartment.img[5]} alt=""/></SwiperSlide>
            <SwiperSlide><img src={apartment.img[6]} alt=""/></SwiperSlide>
         </Swiper>

         <div>{apartment.title}</div>
      </div>
   );
}
