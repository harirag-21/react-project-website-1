import React from "react";
import './Testimonial.css'
import Client from '../Assets/Client Image & Info.png'
function Testimonial() {
  return (
    <div class="fifthbanner">
      <div>
        <h1 id="testi">Testimonial</h1>
      </div>
      <div class="grid3">
        <div class="test1">
          <p id="firstp">
            This is a template Figma file,
            <br /> turned into code using Anima.
            <br /> Learn more at AnimaApp.com
          </p>
          
          <img src={Client} />
        </div>
        <div class="test1">
          <p id="secondp">
            This is a template Figma file, <br /> turned into code using Anima.
            <br /> Learn more at AnimaApp.com
          </p>{" "}
      
          <img src={Client} />
        </div>
        <div class="test1">
          <p id="thirdp">
            This is a template Figma file,
            <br /> turned into code using Anima.
            <br /> Learn more at AnimaApp.com{" "}
          </p>{" "}
          <br />
          <img src={Client} />
        </div>
      </div>
      <div class="grid4">
        <div class="test1">
          <p id="firstp">
            This is a template Figma file,
            <br /> turned into code using Anima.
            <br /> Learn more at AnimaApp.com
          </p>
         <img src={Client} />
        </div>
        <div class="test1">
          <p id="secondp">
            This is a template Figma file,
            <br /> turned into code using Anima.
            <br /> Learn more at AnimaApp.com
          </p>{" "}
           <img src={Client} />
        </div>
        <div class="test1">
          <p id="thirdp">
            This is a template Figma file,
            <br /> turned into code using Anima.
            <br /> Learn more at AnimaApp.com{" "}
          </p>
          <br /> <img src={Client} />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
