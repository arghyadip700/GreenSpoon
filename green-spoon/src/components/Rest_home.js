import React from 'react'
import ab from './all-img/Food.jpg'
function Rest_home() {
    return (
        <>
            <div className='about-page' style={{ width: "100%" }}>
                <div style={{ margin: 0, width: "100%", padding: "0", background: "black", overflow: "hidden", position: "relative", textAlign: "center", color: "white" }}>
                    <img src={ab} className="d-block w-100 " alt="..." style={{ opacity: "0.4", objectFit: "cover", height: "100vh" }} />
                    <div className='center-text'>“Cutting food waste is a delicious way of helping to feed the world and protect the planet.” </div>
                </div>
            </div>
            <div className="restContainer">
                
                
            </div>
            <div class="card-body  d-flex flex-column justify-content-center ">
    <a href="/next_res" dis class="btn btn-primary " >Add Food</a>
  </div>
        </>
    )
    }

export default Rest_home