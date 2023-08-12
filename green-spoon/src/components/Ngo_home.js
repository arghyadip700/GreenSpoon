import React from 'react'
import NGO from './all-img/NGO_QUOTE.png'
function Ngo_home() {
  return (
    <>
 <div className='about-page' style={{ width: "100%" }}>
                <div style={{ margin: "50px 0px", width: "100%", padding: "0", background: "black", overflow: "hidden", position: "relative", textAlign: "center", color: "white" }}>
                    <img src={NGO} className="d-block w-100 " alt="..." style={{ opacity: "0.4", objectFit: "cover", height: "100%" }} />
                    <div className='center-text'>“Your talent determines what you can do. Your motivation determines how much you're willing to do. Your attitude determines how well you do it.”</div>
                </div>
            </div>
            <div className="restContainer">
               
           
            
          </div>

      
    </>
  )
}

export default Ngo_home;