import React from 'react'
import ab from './all-img/Food.jpg'
function Rest_home() {
    return (
        <>


            <div className='about-page' style={{ width: "100%" }}>
                <div style={{ margin: "50px 0px", width: "100%", padding: "0", background: "black", overflow: "hidden", position: "relative", textAlign: "center", color: "white" }}>
                    <img src={ab} className="d-block w-100 " alt="..." style={{ opacity: "0.4", objectFit: "cover", height: "100%" }} />
                    <div className='center-text'>“Your talent determines what you can do. Your motivation determines how much you're willing to do. Your attitude determines how well you do it.”</div>
                </div>
            </div>
            <div className="restContainer">
                <h3>Add your food here</h3>

            </div>
        </>
    )
}

export default Rest_home