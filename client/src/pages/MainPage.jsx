import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApartmentBlock } from '../components/ApartmentBlock.jsx';
import { getAllApartments } from '../redux/features/apartments/apartmentSlice.js';
import { AiOutlineSearch } from 'react-icons/ai';

export const MainPage = () => {
   const [value, setValue] = useState('');
   const [isOpen, setIsOpen] = useState(true);

   const { apartments } = useSelector((state) => state.apartment);
   const dispatch = useDispatch();

   const filterApartments = apartments.filter((apartment) => {
      let searchApartment = apartment.street.toLowerCase().includes(value.toLowerCase());
      console.log(searchApartment);
   
      return searchApartment;
   });

   useEffect(() => {
      dispatch(getAllApartments())
   }, [dispatch]);

   if (!apartments.length) {
      return (
         <div>Загрузка...</div>
      )
   }

   const itemClickHandler = (e) => {
      setValue(e.target.textContent);
      setIsOpen(!isOpen);
   }

   const inputClickHandler = () => {
      setIsOpen(true);
   }
   
   return (
      <div className='main-page'>
         <div className="container">
            <form className='search'>
               <AiOutlineSearch/>
               <div className='search__street'>
                  <input 
                     type="text" 
                     className='search__input'
                     placeholder='Вулиця'
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
               </div>
            </form>
         </div>
         {filterApartments?.map((apartment, idx) => (
            <ApartmentBlock key={idx} apartment={apartment}/>
         ))}
      </div>
   );
}
