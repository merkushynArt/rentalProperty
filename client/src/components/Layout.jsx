import React from 'react';
import { NavBar } from './NavBar';

export const Layout = ({ children }) => {
   return (
      <React.Fragment>
         <div className="navbar-block">
            <NavBar/>
         </div>
         
         <div className="container">
         { children }
         </div>
      </React.Fragment>
   );
}
