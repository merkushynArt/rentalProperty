import React from 'react';
import { NavBar } from './NavBar';

export const Layout = ({ children }) => {
   return (
      <React.Fragment>
         <div className="container">
            <NavBar/>
            { children }
         </div>
      </React.Fragment>
   );
}
