import React from 'react'
import  './Banner.css'
import bannerimage from '../../Assets/HeaderImage 1 (1).png'
function Banner({setModal}) {
  return (
<div className="banner">
      <div className="bannerleft">
        <div className="branding">Branding|Image making</div>
        <div className="visual">Visual Designer</div> 
        <div className="template">This is a template Figma file.turned into code using Anima.
          Learn more at AnimaApp.com</div>
        <button id="contact" onClick={() =>setModal(true)}>Contact</button>
</div>
      
      <div className="bannerright">

        <img src={bannerimage} alt='bannerimage'/>
      </div>
      </div>
     )
  }

export default Banner
