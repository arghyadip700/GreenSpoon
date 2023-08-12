import React from 'react'
import NGO from './all-img/NGO_QUOTE.png'
function Ngo_home() {
  return (
    <>
 <div className='Ngo-home-page' style={{ width: "100%" }}>
                <div style={{ margin: 0, width: "100%", padding: "0", background: "black", overflow: "hidden", position: "relative", textAlign: "center", color: "white" }}>
                    <img src={NGO} className="d-block w-100 " alt="..." style={{ opacity: "0.4", objectFit: "cover", height: "100vh" }} />
                    <div className='center-text'>“There's enough on this planet for everyone's needs but not if you keep wasting.”</div>
                </div>
            </div>
            <div className="restContainer">
               
           
            
          </div>

      
    </>
  )
}

export default Ngo_home;