import React from 'react'
import "./NextBanner.css"
import nextbannerimage from '../../Assets/Group 5334.png'
import nextbannerimage1 from '../../Assets/image 1 (Traced).png'
import nextbannerimage2 from '../../Assets/image 5 (Traced).png'
import nextbannerimage3 from '../../Assets/image 2 (Traced).png'
import nextbannerimage4 from '../../Assets/image 7 (Traced).png'

function NextBanner() {
    const brandImages=[{
        brandImage:nextbannerimage
    },{
        brandImage:nextbannerimage1
    },{
        brandImage:nextbannerimage2
    },{
        brandImage:nextbannerimage3
    },{
        brandImage:nextbannerimage4
    }
]
  return (
    <div>
    <div class="nextbanner">
        {
            brandImages.map((i) =>(
                 <img className="google" alt='google' src={i.brandImage}></img>
            ))
        }
    
      
        {/* <div class="google"><img src={nextbannerimage}/></div> */}
        {/* <div class="nike"> <img src={nextbannerimage1}/></div>
        <div class="sam"><img src={nextbannerimage2}/></div>
        <div class="apple"><img src={nextbannerimage3}/></div>
        <div class="addidas"><img src={nextbannerimage4}/></div> */}
      </div>
      </div>
    
  )
}

export default NextBanner
