import React, { useState } from 'react'
import './Contact.css'
import { NavLink } from 'react-router-dom'
function Contact() {
  const[visible,setVisible]=useState(true)
  return (
    
      <div>
        {visible&&
      
        <div className='box2'>
              <NavLink to='/' className='btn9' onClick={()=>setVisible(false)}>X</NavLink>
              <div className='contactform'><h1>CONTACT FORM</h1></div>
            
      
            <input type='text' name='name'  className="hello" placeholder='NAME'/>
            <input type='email' name='email'  className="hello" placeholder='EMAIL'/>
            <input type='number' name='number'   className="hello" placeholder='PH NUMBER'/>
            <input type='text'  name="message"  className="hello" placeholder='MESSAGE'/>
            <button type='submit'>SUBMIT</button>   </div>   
}  
            </div>
    
  )
}
export default Contact
 