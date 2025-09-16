import React from 'react'

function Contact({setModal}) {
  return (
    
        
        <div className='box6'>
              <div className='btn9' onClick={()=>setModal(false)}>X</div>
              <div className='contactform'><h1>CONTACT FORM</h1></div>
            
      
            <input type='text' name='name'  className="hello" placeholder='NAME'/>
            <input type='email' name='email'  className="hello" placeholder='EMAIL'/>
            <input type='number' name='number'   className="hello" placeholder='PH NUMBER'/>
            <input type='text'  name="message"  className="hello" placeholder='MESSAGE'/>
            <button type='submit'>SUBMIT</button>   </div>     
    
  )
}
export default Contact
 