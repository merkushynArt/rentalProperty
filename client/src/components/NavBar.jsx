import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
               <NavLink exact to="/"><RiHome2Fill/> Головна</NavLink>
            </li>
            {isAuth && (
               <li className='navbar__list-item'>
                  <NavLink to="/new"><IoIosAddCircle/> Добавити квартиру</NavLink>
               </li>
            )}
         </ul>

         <div className='navbar__admin'>
            {isAuth ? (
               <button onClick={logoutHandler}><GoSignOut/></button>
            ) : (
               <NavLink to={'/login'}><FaUserCircle/></NavLink>
            )}
         </div>
      </nav>
   );
}
