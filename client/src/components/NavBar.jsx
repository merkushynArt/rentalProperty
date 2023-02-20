import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
   return (
      <nav>
         <ul>
            <li>
               <NavLink exact to="/">Головна</NavLink>
            </li>
            <li>
               <NavLink to="/apartments">Усі квартири</NavLink>
            </li>
            <li>
               <NavLink to="/new">Добавити квартиру</NavLink>
            </li>
         </ul>

         <div>
            <Link to={'/login'}>Увійти</Link>
         </div>
      </nav>
   );
}
