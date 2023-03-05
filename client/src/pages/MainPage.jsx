import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApartmentBlock } from '../components/ApartmentBlock.jsx';
import { getAllApartments } from '../redux/features/apartments/apartmentSlice.js';
import { AiOutlineSearch } from 'react-icons/ai';

export const MainPage = () => {
   const [street, setStreet] = useState('');
   const [metro, setMetro] = useState('');
   const [isOpen, setIsOpen] = useState(true);

   const { apartments } = useSelector((state) => state.apartment);
   const dispatch = useDispatch();

   const filterApartments = apartments.filter((apartment) => {
      let searchApartment = apartment.street.toLowerCase().includes(street.toLowerCase());
      let searchMetro = apartment.metro.toLowerCase().includes(metro.toLowerCase());

      return searchApartment && searchMetro;
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
      setStreet(e.target.textContent);
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
                     value={street}
                     onChange={(e) => { 
                        setStreet(e.target.value);
                        console.log(apartments);
                     }}
                     onClick={inputClickHandler}
                  />
                  <ul className='autocomplete'>
                     {
                        street && isOpen ? filterApartments?.map((apartment, idx) => (
                           <li className='autocomplete__item' onClick={itemClickHandler}>{apartment.street}</li>
                        )) : null
                     }
                  </ul>
               </div>

               <div className='search__metro'>
                  <select value={metro} onChange={(e) => setMetro(e.target.value)}>
                     <option value="">метро</option>
                     <option value="Політехнічний Інститут">Політехнічний Інститут</option>
                     <option value="Вокзальна">Вокзальна</option>
                     <option value="Університет">Університет</option>
                     <option value="Театральна">Театральна</option>
                     <option value="Хрещатик">Хрещатик</option>
                     <option value="Арсенальна">Арсенальна</option>
                     <option value="Майдан Незалежності">Майдан Незалежності</option>
                     <option value="Олімпійська">Олімпійська</option>
                     <option value="Палац Україна">Палац Україна</option>
                     <option value="Либідска">Либідска</option>
                     <option value="Деміївска">Деміївска</option>
                     <option value="Лук'янівська">Лук'янівська</option>
                     <option value="Золоті Ворота">Золоті Ворота</option>
                     <option value="Палац Спорту">Палац Спорту</option>
                     <option value="Кловська">Кловська</option>
                     <option value="Печерска">Печерска</option>
                     <option value="Дружби Народів">Дружби Народів</option>
                  </select>
               </div>
            </form>

            {filterApartments?.map((apartment, idx) => (
            <ApartmentBlock key={idx} apartment={apartment} />
         ))}
         </div>
      </div>
   );
}
