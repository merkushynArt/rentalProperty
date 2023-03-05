import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../utils/axios.js';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { checkIsAuth } from '../redux/features/auth/authSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillDelete } from 'react-icons/ai';
import { removeApartment } from '../redux/features/apartments/apartmentSlice.js';
import { toast } from 'react-toastify';

export const ApartmentPage = () => {
   const [apartment, setApartment] = useState(null);

   const params = useParams();
   const isAuth = useSelector(checkIsAuth);
   const { admin } = useSelector((state) => state.auth);
   const dispatch = useDispatch();
   const navigate = useNavigate()

   const removeApartmentHandler = () => {
      try {
         dispatch(removeApartment(params.id));
         toast('Ви успішно видалили квартиру');
         navigate('/');
      } catch (error) {
         console.log(error);
      }
   }

   const fetchApartment = useCallback(async () => {
      const { data } = await axios.get(`/apartments/${params.id}`)
      setApartment(data);
   }, [params.id]);

   useEffect(() => {
      fetchApartment()
   }, [fetchApartment]);

   if (!apartment) {
      return (
         <div>
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

         <div className='apartment-page__title'>
            <h3>{ apartment.title }</h3>
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

         <p className="apartment-page__description">
            { apartment.description }
         </p>

         {isAuth? (
            <div className='apartment-page__secred'>
               <div>
                  <div className='apartment-page__secred-name'>{apartment.sellerName}</div>
                  <div className='apartment-page__secred-list'>
                     <span>{ apartment.sellerType }</span>
                     <span>{ apartment.commission }</span>
                  </div>
                  <a className='btn secred' href={`tel:${apartment.sellerPhone}`}>{ apartment.sellerPhone }</a>
               </div>
               {admin?._id === apartment.realtorAdmin && (
                  <div className='apartment-page__secred-bts'>
                     <button onClick={removeApartmentHandler}>
                        <AiFillDelete/>
                     </button>
                  </div>
               )}
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
