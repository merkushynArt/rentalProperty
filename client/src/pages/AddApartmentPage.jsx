import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createApartment } from '../redux/features/apartments/apartmentSlice';
import TextareaAutosize from 'react-textarea-autosize';

export const AddApartmentPage = () => {
   const [street, setStreet] = useState('');
   const [houseNumber, setHouseNumber] = useState('');
   const [metro, setMetro] = useState('');
   const [houseType, setHouseType] = useState('');
   const [price, setPrice] = useState('');
   const [floor, setFloor] = useState('');
   const [floorMax, setFloorMax] = useState('');
   const [apartmentArea, setApartmentArea] = useState('');
   const [numberRooms, setNumberRooms] = useState('');
   const [bathroom, setBathroom] = useState('');
   const [sellerName, setSellerName] = useState('');
   const [sellerType, setSellerType] = useState('');
   const [commission, setCommission] = useState('');
   const [sellerPhone, setSellerPhone] = useState('');
   const [description, setDescription] = useState('');
   const [img, setImg] = useState(Array(7).fill(''));

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleImageChange = (event, index) => {
      const newImg = [...img];
      newImg[index] = event.target.value;
      setImg(newImg);
   };

   const submitHandler = (e) => {
      try {
         dispatch(createApartment({ street, houseNumber, metro, houseType, price, floor, floorMax, apartmentArea, numberRooms, bathroom, sellerName, sellerType, commission, sellerPhone, description, img }));
         navigate('/');
      } catch (error) {
         console.log(error);
      }
   }

   const clearFormHandler = () => {
      setStreet('');
      setHouseNumber('');
      setMetro('');
      setHouseType('');
      setPrice('');
      setFloor('');
      setFloorMax('');
      setApartmentArea('');
      setNumberRooms('');
      setBathroom('');
      setSellerName('');
      setSellerType('');
      setCommission('');
      setSellerPhone('');
      setDescription('');
   }

   return (
      <form
         className='form-apartment'
         onSubmit={(e) => e.preventDefault()}
      >
         <h2 className='Title'>Створити квартиру</h2>

         <div className='form-apartment__list'>
            <label className='form-apartment__list-item'>
               Назва вулиці:
               <input
                  type='text'
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
               />
            </label>

            <label className='form-apartment__list-item'>
               Номер будинку:
               <input
                  type='text'
                  value={houseNumber}
                  onChange={(e) => setHouseNumber(e.target.value)}
               />
            </label>


            <label className='form-apartment__list-item'>
               Метро:
               <select value={metro} onChange={(e) => setMetro(e.target.value)}>
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
                  <option value="Либідска">Либідска</option>
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
               <select value={houseType} onChange={(e) => setHouseType(e.target.value)}>
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
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
               />
            </label>

            <label className='form-apartment__list-item'>
               Етаж квартири:
               <input
                  type='text'
                  value={floor}
                  onChange={(e) => setFloor(e.target.value)}
               />
            </label>

            <label className='form-apartment__list-item'>
               Етажність будинку:
               <input
                  type='text'
                  value={floorMax}
                  onChange={(e) => setFloorMax(e.target.value)}
               />
            </label>

            <label className='form-apartment__list-item'>
               Площа квартири:
               <input
                  type='text'
                  value={apartmentArea}
                  onChange={(e) => setApartmentArea(e.target.value)}
               />
            </label>

            <label className='form-apartment__list-item'>
               Кількість кімнат:
               <select value={numberRooms} onChange={(e) => setNumberRooms(e.target.value)}>
                  <option value="">вибрати</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
               </select>
            </label>

            <label className='form-apartment__list-item'>
               Санвузел:
               <select value={bathroom} onChange={(e) => setBathroom(e.target.value)}>
                  <option value="">вибрати</option>
                  <option value="роздільний">роздільний</option>
                  <option value="суміжний">суміжний</option>
               </select>
            </label>

            <label className='form-apartment__list-item'>
               Ім'я продавця:
               <input
                  type='text'
                  value={sellerName}
                  onChange={(e) => setSellerName(e.target.value)}
               />
            </label>

            <label className='form-apartment__list-item'>
               Тип продавця:
               <select value={sellerType} onChange={(e) => setSellerType(e.target.value)}>
                  <option value="">вибрати</option>
                  <option value="власник">власник</option>
                  <option value="рієлтор">рієлтор</option>
               </select>
            </label>

            <label className='form-apartment__list-item'>
               Пропозиція продавця:
               <select value={commission} onChange={(e) => setCommission(e.target.value)}>
                  <option value="">вибрати</option>
                  <option value="без%">без%</option>
                  <option value="%">%</option>
               </select>
            </label>

            <label className='form-apartment__list-item'>
               Контакт продавця:
               <input
                  type='text'
                  value={sellerPhone}
                  onChange={(e) => setSellerPhone(e.target.value)}
               />
            </label>

            <label className='form-apartment__list-item'>
               Опис квартири:
               <TextareaAutosize
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
               />
            </label>

         </div>

         <div className='form-apartment__img'>
            <span>Фото квартири</span>
            {img.map((img, index) => (
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