import React from 'react'
import CountUp from 'react-countup'
import cha from './all-img/Charity-in-People.webp'
function ComHome() {
  return (
    <>
    <div >
      <img src={cha} className="d-block w-100 " alt="..." style={{ opacity: "0.8", objectFit: "cover", height: "100%" }}/>
    </div>
      <div className=" head  justify-content-center d-flex m-1 p-1">   OUR IMPACT</div>
      <div className=" our-impact  row m-2 p-5 ">
     
        <div className="col-sm-6 mb-3 mb-sm-0 d-flex  justify-content-center heading">
          <div className="d-flex flex-column ">
           <div className="num d-flex  justify-content-center">
            <CountUp start={0} end={100} duration={2} delay={0}/>
            +</div>
           <div className="num-name d-flex  justify-content-center">NGOS</div>
           <div className="num-name-title d-flex  justify-content-center">Charity brings to life again those who are spiritually dead.</div>

          </div>
        </div>
        <div className="col-sm-6 mb-3 mb-sm-0 d-flex  justify-content-center heading">
          <div className="d-flex flex-column ">
           <div className="num d-flex  justify-content-center"><CountUp start={0} end={50} duration={2} delay={0}/>+</div>
           <div className="num-name d-flex  justify-content-center">RESTAURENTS</div>
           <div className="num-name-title d-flex  justify-content-center">Charity brings to life again those who are spiritually dead.</div>
          </div>
        </div>
       
        
      </div>
    </>
  )
}

export default ComHome