import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiHome2Fill } from "react-icons/ri";
import { IoIosAddCircle } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { checkIsAuth, logout } from '../redux/features/auth/authSlice.js';
import { toast } from 'react-toastify';

export const NavBar = () => {
   const isAuth = useSelector(checkIsAuth);
   const dispatch = useDispatch();

   const logoutHandler = () => {
      dispatch(logout())
      window.localStorage.removeItem('token');
      toast('Ви вийшли з адміністративної панелі');
   }

   return (
      <nav className='navbar'>
         <ul className='navbar__list'>
            <li className='navbar__list-item'>
               <NavLink to="/"><RiHome2Fill/> <span>Головна</span></NavLink>
            </li>
            {isAuth && (
               <li className='navbar__list-item'>
                  <NavLink to="/new"><IoIosAddCircle/><span>Добавити квартиру</span></NavLink>
               </li>
            )}
         </ul>

         {!isAuth && (<div className='navbar__title'>Оренда нерухомості у Києві</div>)}

         <div className='navbar__admin'>
            {isAuth ? (
               <NavLink to={'/'} onClick={logoutHandler}><GoSignOut/></NavLink>
            ) : (
               <NavLink to={'/login'}><FaUserCircle/></NavLink>
            )}
         </div>
      </nav>
   );
}
