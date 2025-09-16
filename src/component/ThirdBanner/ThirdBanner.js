import React from 'react'
import "./ThirdBanner.css"
import fbox1 from '../../Assets/Skills Card.png'
import sbox1 from '../../Assets/Skills Card (2).png'
import tbox1 from'../../Assets/Skills Card (1).png'
function ThirdBanner() {
    const boximages=[{
        boximage:fbox1
    },{
        boximage:sbox1
    },{
        boximage:tbox1
    }
    
]
  return (
        <div>
 <div class="thirdbanner">

    
{
    boximages.map((i)=>(
        <img className="fbox" src={i.boximage} alt='Fbox'/>
    ))
}
      {/* <div class="fbox">
        <div class="img1"><img src={fbox1}/></div>
      </div>
      <div class="sbox">
<div class="img2"><img src={sbox1}/></div>
      </div>
      <div class="tbox">
<div class="img3"><img src={tbox1}/></div> */}
      </div>
   </div>
  )
}

export default ThirdBanner
