import React from "react";
import "./Header.css";

function Header() {
  const navitems = [
    {
      value: "/about",
      name: "ABOUT"
    },{confi

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
      <div class="headerleft">
        <h1>LOGO</h1>
      </div>
       <div class="headerright">
    {
      navitems.map((i) =>(
        <div class="headerright">
        <div>{i.name}</div>
      
   

   </div>
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
