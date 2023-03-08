import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createApartment } from '../redux/features/apartments/apartmentSlice';
import TextareaAutosize from 'react-textarea-autosize';

export const AddApartmentPage = () => {
   const [apartmentData, setApartmentData] = useState({
      title: '',
      street: '',
      houseNumber: '',
      metro: '',
      houseType: '',
      price: '',
      floor: '',
      floorMax: '',
      apartmentArea: '',
      numberRooms: '',
      bathroom: '',
      sellerName: '',
      sellerType: '',
      commission: '',
      notes: '',
      sellerPhone: '',
      description: '',
      img: Array(7).fill(''),
   });

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleImageChange = (event, index) => {
      const newImg = [...apartmentData.img];
      newImg[index] = event.target.value;
      setApartmentData({ ...apartmentData, img: newImg });
   };

   const submitHandler = () => {
      try {
         dispatch(createApartment(apartmentData));
         navigate('/');
      } catch (error) {
         console.log(error);
      }
   }

   const clearFormHandler = () => {
      setApartmentData({
         title: '',
         street: '',
         houseNumber: '',
         metro: '',
         houseType: '',
         price: '',
         floor: '',
         floorMax: '',
         apartmentArea: '',
         numberRooms: '',
         bathroom: '',
         sellerName: '',
         sellerType: '',
         notes: '',
         commission: '',
         sellerPhone: '',
         description: '',
         img: Array(7).fill(''),
      });
   }

   return (
      <form
         className='form-apartment'
         onSubmit={(e) => e.preventDefault()}
      >
         <h2 className='Title'>Створити квартиру</h2>

         <div className='form-apartment__list'>
            <label className='form-apartment__list-item'>
               Заголовок оголошення:
               <input 
                  type="text" 
                  value={apartmentData.title} 
                  onChange={(e) => setApartmentData({ ...apartmentData, title: e.target.value })}
               />
            </label>

            <label className='form-apartment__list-item'>
               Назва вулиці:
               <input 
                  type="text" 
                  value={apartmentData.street} 
                  onChange={(e) => setApartmentData({ ...apartmentData, street: e.target.value })} 
               />
            </label>

            <label className='form-apartment__list-item'>
               Номер будинку:
               <input 
                  type="text" 
                  value={apartmentData.houseNumber} 
                  onChange={(e) => setApartmentData({ ...apartmentData, houseNumber: e.target.value })} 
               />
            </label>


            <label className='form-apartment__list-item'>
               Метро:
               <select value={apartmentData.metro} onChange={(e) => setApartmentData({ ...apartmentData, metro: e.target.value })}>
                  <option value="">вибрати</option>
                  <option value="Політехнічний Інститут">Політехнічний Інститут</option>
                  <option value="Вокзальна">Вокзальна</option>
                  <option value="Університет">Університет</option>
                  <option value="Театральна">Театральна</option>
                  <option value="Хрещатик">Хрещатик</option>
                  <option value="Арсенальна">Арсенальна</option>
                  <option value="Майдан Незалежності">Майдан Незалежності</option>
                  <option value="Олімпійська">Олімпійська</option>
                  <option value="Палац Україна">Палац Україна</option>
                  <option value="Либідська">Либідська</option>
                  <option value="Деміївска">Деміївска</option>
                  <option value="Лук'янівська">Лук'янівська</option>
                  <option value="Золоті Ворота">Золоті Ворота</option>
                  <option value="Палац Спорту">Палац Спорту</option>
                  <option value="Кловська">Кловська</option>
                  <option value="Печерска">Печерска</option>
                  <option value="Дружби Народів">Дружби Народів</option>
               </select>
            </label>

            <label className='form-apartment__list-item'>
               Тип будинку:
               <select value={apartmentData.houseType} onChange={(e) => setApartmentData({ ...apartmentData, houseType: e.target.value })}>
                  <option value="">вибрати</option>
                  <option value="Житловий комплекс">Житловий комплекс</option>
                  <option value="Царский будинок">Царский будинок</option>
                  <option value="Новобудова">Новобудова</option>
                  <option value="Блочний висотний дім">Блочний висотний дім</option>
                  <option value="Хрущевка">Хрущевка</option>
               </select>
            </label>

            <label className='form-apartment__list-item'>
               Ціна квартири:
               <input
                  type='text'
                  value={apartmentData.price}
                  onChange={(e) => setApartmentData({ ...apartmentData, price: e.target.value })}
               />
            </label>

            <label className='form-apartment__list-item'>
               Етаж квартири:
               <input
                  type='text'
                  value={apartmentData.floor}
                  onChange={(e) => setApartmentData({ ...apartmentData, floor: e.target.value })}
               />
            </label>

            <label className='form-apartment__list-item'>
               Етажність будинку:
               <input
                  type='text'
                  value={apartmentData.floorMax}
                  onChange={(e) => setApartmentData({ ...apartmentData, floorMax: e.target.value })}
               />
            </label>

            <label className='form-apartment__list-item'>
               Площа квартири:
               <input
                  type='text'
                  value={apartmentData.apartmentArea}
                  onChange={(e) => setApartmentData({ ...apartmentData, apartmentArea: e.target.value })}
               />
            </label>

            <label className='form-apartment__list-item'>
               Кількість кімнат:
               <select value={apartmentData.numberRooms} onChange={(e) => setApartmentData({ ...apartmentData, numberRooms: e.target.value })}>
                  <option value="">вибрати</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
               </select>
            </label>

            <label className='form-apartment__list-item'>
               Санвузел:
               <select value={apartmentData.bathroom} onChange={(e) => setApartmentData({ ...apartmentData, bathroom: e.target.value })}>
                  <option value="">вибрати</option>
                  <option value="роздільний">роздільний</option>
                  <option value="суміжний">суміжний</option>
               </select>
            </label>

            <label className='form-apartment__list-item'>
               Ім'я продавця:
               <input
                  type='text'
                  value={apartmentData.sellerName}
                  onChange={(e) => setApartmentData({ ...apartmentData, sellerName: e.target.value })}
               />
            </label>

            <label className='form-apartment__list-item'>
               Тип продавця:
               <select value={apartmentData.sellerType} onChange={(e) => setApartmentData({ ...apartmentData, sellerType: e.target.value })}>
                  <option value="">вибрати</option>
                  <option value="власник">власник</option>
                  <option value="рієлтор">рієлтор</option>
               </select>
            </label>

            <label className='form-apartment__list-item'>
               Пропозиція продавця:
               <select value={apartmentData.commission} onChange={(e) => setApartmentData({ ...apartmentData, commission: e.target.value })}>
                  <option value="">вибрати</option>
                  <option value="без%">без%</option>
                  <option value="%">%</option>
               </select>
            </label>

            <label className='form-apartment__list-item'>
               Контакт продавця:
               <input
                  type='text'
                  value={apartmentData.sellerPhone}
                  onChange={(e) => setApartmentData({ ...apartmentData, sellerPhone: e.target.value })}
               />
            </label>

            <label className='form-apartment__list-item--notes'>
               Особисті нотатки:
               <TextareaAutosize
                  value={apartmentData.notes}
                  onChange={(e) => setApartmentData({ ...apartmentData, notes: e.target.value })}
               />
            </label>

            <label className='form-apartment__list-item'>
               Опис квартири:
               <TextareaAutosize
                  value={apartmentData.description}
                  onChange={(e) => setApartmentData({ ...apartmentData, description: e.target.value })}
               />
            </label>

         </div>

         <div className='form-apartment__img'>
            <span>Фото квартири</span>
            {apartmentData.img.map((img, index) => (
               <div className='form-apartment__img-item' key={index}>
                  <input type="text" placeholder='Введіть url зображення' value={img} onChange={(event) => handleImageChange(event, index)} />
                  <img src={img} alt={``} />
               </div>
            ))}
         </div>

         <div className='btn-wrapper'>
            <button
               className='btn'
               type='submit'
               onClick={submitHandler}
            >
               Добавити
            </button>

            <button
               className='btn'
               onClick={clearFormHandler}
            >
               Відмінити
            </button>
         </div>
      </form>
   );
}