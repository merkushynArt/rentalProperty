import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../utils/axios.js';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { checkIsAuth } from '../redux/features/auth/authSlice.js';
import { useSelector } from 'react-redux';

export const ApartmentPage = () => {
   const [apartment, setApartment] = useState(null);

   const params = useParams();
   const isAuth = useSelector(checkIsAuth);

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

         <div className='apartment-page__title Title'>
            <div>{ apartment.title }</div>
            <div>{ apartment.price }</div>
         </div>

         <div className="apartment-page__info">
            <div className="apartment-page__info-item">
               Адреса: { apartment.street } { apartment.houseNumber }
            </div>
            <div className="apartment-page__info-item">
               Метро: { apartment.metro }
            </div>
            <div className="apartment-page__info-item">
               Тип будинку: { apartment.houseType }
            </div>
            <div className="apartment-page__info-item">
               Поверх: { apartment.floor }/{ apartment.floorMax }
            </div>
            <div className="apartment-page__info-item">
               Площа: { apartment.apartmentArea }м2
            </div>
            <div className="apartment-page__info-item">
               Кількість кімнат: { apartment.numberRooms }
            </div>
            <div className="apartment-page__info-item">
               Cанвузол: { apartment.bathroom }
            </div>
         </div>

         <div className="apartment-page__description">
            { apartment.description }
         </div>

         {isAuth? (
            <div className='apartment-page__secred'>
               <div className='apartment-page__secred-name'>{apartment.sellerName}</div>
               <div className='apartment-page__secred-list'>
                  <span>{apartment.sellerType}</span>
                  <span>{apartment.commission}</span>
               </div>
               <a className='btn' href={`tel:${apartment.sellerPhone}`}>{apartment.sellerPhone}</a>
            </div>
            ) : (
               <div className='apartment-page__contacts'>
                  <span>{apartment.adminname}</span>: <a className='btn' href={`tel:${apartment.adminPhone}`}>{apartment.adminPhone}</a>
               </div>
            )
         }
      </div>
   );
}
