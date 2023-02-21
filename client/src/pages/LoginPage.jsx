import React from 'react';

export const LoginPage = () => {
   return (
      <form
         className='form'
         onSubmit={(e) => e.preventDefault()}
      >
         <h1 className='title'>Вхід до адміністративної панелі</h1>

         <label className='form__input'>
            Ім'я адміністратора
            <input type="text" />
         </label>

         <label className='form__input'>
            Пароль
            <input type="password" />
         </label>

         <button className='btn' type='submit'>Увійти</button>
      </form>
   );
}
