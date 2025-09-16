import React from "react";
import "./Header.css";
import {NavLink} from 'react-router-dom'

function Header() {
  const navitems = [
    {
      value: "/about",
      name: "ABOUT"
    },{

      value: "/work",
      name: "WORK",
    },
    {
      value: "/contact",
      name: "CONTACT",
    },
  ];
  return (
    <div class="header">
      <NavLink to={'/'} className="headerleft">
        <h1>LOGO</h1>
      </NavLink>
       <div className="headerright">
    {
      navitems.map((i) =>(
        <NavLink to={i.value} className="headerright">
        {i.name}</NavLink>
      
   

   
      ))
    }
    </div>
    


      {/* <div class="headerright">
        <div>ABOUT</div>
        <div>WORK</div>
        <div>CONTACT</div>
      </div> */}
    </div>
  );
}

export default Header;
