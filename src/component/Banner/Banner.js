import React from 'react'
import  './Banner.css'
import bannerimage from '../../Assets/HeaderImage 1 (1).png'
function Banner() {
  return (
<div class="banner">
      <div class="bannerleft">
        <div class="branding">Branding|Image making</div>
        <div class="visual">Visual Designer</div> 
        <div class="template">This is a template Figma file.turned into code using Anima.
          Learn more at AnimaApp.com</div>
        <button id="contact">Contact</button>
</div>
      
      <div class="bannerright">

        <img src={bannerimage} />
      </div>
      </div>
     )
  }

export default Banner
