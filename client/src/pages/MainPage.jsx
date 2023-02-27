import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApartmentBlock } from '../components/ApartmentBlock.jsx';
import { getAllApartments } from '../redux/features/apartments/apartmentSlice.js';

export const MainPage = () => {
   const dispatch = useDispatch();
   const { apartments } = useSelector((state) => state.apartment);
   

   useEffect(() => {
      dispatch(getAllApartments())
   }, [dispatch]);

   if (!apartments.length) {
      return (
         <div>Загрузка...</div>
      )
   }

   return (
      <div className='main-page'>
         {apartments?.map((apartment, idx) => (
            <ApartmentBlock key={idx} apartment={apartment}/>
         ))}
      </div>
   )
}
