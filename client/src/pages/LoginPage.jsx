import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkIsAuth, loginAdmin } from '../redux/features/auth/authSlice';
import { toast } from 'react-toastify';

export const LoginPage = () => {
   const [adminname, setAdminname] = useState('');
   const [password, setPassword] = useState('');

   const { admin } = useSelector((state) => state.auth);
   const isAuth = useSelector(checkIsAuth);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   useEffect(() => {
      if(isAuth) {
         navigate('/');
         toast(`Вітаю ${admin.adminname}`);
      } 
   }, [admin, isAuth, navigate]);

   const handleSubmit = () => {
      try {
         dispatch(loginAdmin({ adminname, password }));
      } catch (error) {
         console.log(error);
      }
   }

   return (
      <form
         className='form'
         onSubmit={(e) => e.preventDefault()}
      >
         <h1 className='title'>Вхід до адміністративної панелі</h1>

         <label className='form__input'>
            Ім'я адміністратора
            <input 
               type="text" 
               value={adminname}
               onChange={(e) => setAdminname(e.target.value)}
            />
         </label>

         <label className='form__input'>
            Пароль
            <input 
               type="password" 
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />
         </label>

         <button 
            className='btn' 
            type='submit'
            onClick={handleSubmit}
         >
            Увійти
         </button>
      </form>
   );
}
