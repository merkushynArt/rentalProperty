import React from 'react';
import { NavBar } from './NavBar';

export const Layout = ({ children }) => {
   return (
      <React.Fragment>
         <div className="navbar-block">
            <NavBar/>
         </div>

         { children }
      </React.Fragment>
   );
}
