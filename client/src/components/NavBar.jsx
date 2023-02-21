import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiHome2Fill } from "react-icons/ri";
import { IoIosAddCircle } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

export const NavBar = () => {
   return (
      <nav className='navbar'>
         <ul className='navbar__list'>
            <li className='navbar__list-item'>
               <NavLink exact to="/"><RiHome2Fill/> Головна</NavLink>
            </li>
            <li className='navbar__list-item'>
               <NavLink to="/new"><IoIosAddCircle/> Добавити квартиру</NavLink>
            </li>
         </ul>

         <div className='navbar__admin'>
            <NavLink to='/login'><FaUserCircle/></NavLink>
         </div>
      </nav>
   );
}
