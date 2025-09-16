import React from 'react'
import './FourthBanner.css'
import boximage1 from '../../Assets/Image (1).png'
import boximage2 from '../../Assets/Image.png'
import boximage3 from '../../Assets/Image (2).png'
import boximage4 from '../../Assets/Image (3).png'
import boximage5 from '../../Assets/Image (4).png'
import boximage6 from'../../Assets/Image (5).png'
function FourthBanner() {
    const boximages=[{
        boximage:boximage1
        },{
        boximage:boximage2
        },{
        boximage:boximage3

        },{
        boximage:boximage4
        },{
        boximage:boximage5
        },{
        boximage:boximage6
        }        
    
]
  return (
    <div>
<div className="fourthbanner">
   <div className="grid1">
  {
    boximages.map((i)=>(
      
          <div className="imgg1"><img src={i.boximage}  alt='boximage'/><h2 id="pt">Project title</h2><br/> <h4 id="art">UI.Art direction</h4></div>



    ))
   
  }
    </div>
     
    <span id="work">Latest Work</span></div>
    {/* <div className="grid1">
          <div className="imgg1"><img src={boximage1}/><h2 id="pt">Project title</h2> <h4 id="art">UI.Art direction</h4></div>
          <div className="imgg2"><img src={boximage2}/><h2 id="pt">Project title</h2><h4 id="art">UI.Art direction</h4></div>
          <div className="imgg3"><img src={boximage3}/><h2 id="pt">Project title</h2><h4 id="art">UI.Art direction</h4></div></div>
          
          <div className="grid2">
            <div className="imggg1"><img src={boximage4}/><h2 id="pt">Project title</h2> <h4 id="art">UI.Art direction</h4></div>
            <div className="imggg2"><img src={boximage5}/><h2 id="pt">Project title</h2> <h4 id="art">UI.Art direction</h4></div>
            <div className="imggg3"><img src={boximage6}/><h2 id="pt">Project title</h2> <h4 id="art">UI.Art direction</h4></div>
          </div> */}
          </div>
  )
}

export default FourthBanner
