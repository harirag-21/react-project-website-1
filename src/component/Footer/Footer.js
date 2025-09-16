import React from 'react'
import './Footer.css'
import SocialLink from "../../Assets/Social Links.png"
function Footer() {
  return (

    
              <div  className="footer">
                <div><span>Lets work together</span></div>
                <div className="footer-maincont">
                  <div className="footer-left">
                  <div className="footer-content">
                  This is a template Figma file, turned into code using Anima. <br/> Learn more at AnimaApp.com This is a template Figma file,<br/> turned into code using Anima. Learn more at AnimaApp.com
                
                
                
                </div>
                <div className="footer-icons">
                  <img src={SocialLink} alt='socialLink'/>

                </div>
                </div>


                <div className="footer-form">
                  <div className="form-name">
                    <form><input type="text" placeholder="NAME" id="name" />
              <br/><br/><input type="text" placeholder="EMAIL" id="email" />
              <br/><br/>
            <button type="submit">SUBMIT</button></form>
            </div>
                  </div>


        </div>
                </div>
                       
  )
}

export default Footer;
