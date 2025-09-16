import React from "react";
import './Testimonial.css'
import Client from '../Assets/Client Image & Info.png'
function Testimonial() {
  return (
    <div className="fifthbanner">
      <div>
        <h1 id="testi">Testimonial</h1>
      </div>
      <div className="grid3">
        <div className="test1">
          <p id="firstp">
            This is a template Figma file,
            <br /> turned into code using Anima.
            <br /> Learn more at AnimaApp.com
          </p>
          
          <img src={Client} />
        </div>
        <div className="test1">
          <p id="secondp">
            This is a template Figma file, <br /> turned into code using Anima.
            <br /> Learn more at AnimaApp.com
          </p>{" "}
      
          <img src={Client} />
        </div>
        <div className="test1">
          <p id="thirdp">
            This is a template Figma file,
            <br /> turned into code using Anima.
            <br /> Learn more at AnimaApp.com{" "}
          </p>{" "}
          <br />
          <img src={Client} />
        </div>
      </div>
      <div className="grid4">
        <div className="test1">
          <p id="firstp">
            This is a template Figma file,
            <br /> turned into code using Anima.
            <br /> Learn more at AnimaApp.com
          </p>
         <img src={Client} />
        </div>
        <div className="test1">
          <p id="secondp">
            This is a template Figma file,
            <br /> turned into code using Anima.
            <br /> Learn more at AnimaApp.com
          </p>{" "}
           <img src={Client} />
        </div>
        <div className="test1">
          <p id="thirdp">
            This is a template Figma file,
            <br /> turned into code using Anima.
            <br /> Learn more at AnimaApp.com{" "}
          </p>
          <br /> <img src={Client} alt="Client"/>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
