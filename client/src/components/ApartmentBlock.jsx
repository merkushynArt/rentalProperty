import React from 'react';

export const ApartmentBlock = ({ apartment }) => {
   if(!apartment) {
      return (
         <div>Немає квартир</div>
      )
   }

   return (
      <div className='apartment-block'>
         <div className='apartment-block__img'>
            <img src={apartment.img[0]} alt="" />
         </div>
         <div className="apartment-block__info">
            <div className='apartment-block__info-item'>
               <div>{apartment.title}</div>
               <div className='apartment-block__info-price'>{apartment.price}</div>
            </div>
            <div className='apartment-block__info-item'>
               <div>{apartment.apartmentArea}m2</div>
               <div>{apartment.numberRooms} кім</div>
            </div>
         </div>
      </div>
   );
}
