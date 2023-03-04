import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllApartments } from '../redux/features/apartments/apartmentSlice';

export const SearchStreet = () => {
   const [value, setValue] = useState('');
   const [isOpen, setIsOpen] = useState(true);

   const dispatch = useDispatch();
   const { apartments } = useSelector((state) => state.apartment);

   const filterApartments = apartments.filter((apartment) => {
      let searchApartment = apartment.street.toLowerCase().includes(value.toLowerCase());
   
      return searchApartment;
   });

   useEffect(() => {
      dispatch(getAllApartments())
   }, [dispatch]);

   const itemClickHandler = (e) => {
      setValue(e.target.textContent);
      setIsOpen(!isOpen);
   }

   const inputClickHandler = () => {
      setIsOpen(true);
   }
   return (
      <form className='search'>
         <input 
            type="text" 
            className='search__input'
            value={value}
            onChange={(e) => { 
               setValue(e.target.value);
               console.log(apartments);
            }}
            onClick={inputClickHandler}
         />
         <ul className='autocomplete'>
            {
               value && isOpen ? filterApartments?.map((apartment, idx) => (
                  <li className='autocomplete__item' onClick={itemClickHandler}>{apartment.street}</li>
               )) : null
            }
         </ul>
      </form>
   )
}
