import React from "react";
import NGO from "./all-img/istockphoto-.jpg";
function Ngo_home() {
  return (
    <>
      <div className="Ngo-home-page " style={{ width: "100%" }}>
        <div
          style={{
            margin: 0,
            width: "100%",
            padding: "0",
            background: "black",
            overflow: "hidden",
            position: "relative",
            textAlign: "center",
            color: "white",
          }}
        >
          {/* <img
            src={NGO}
            className="d-block  "
            alt="..."
            style={{ opacity: "0.4", objectFit: "cover", height: "100%" }}
          /> */}
          <div className="center-text">
            “There's enough on this planet for everyone's needs but not if you
            keep wasting.”
          </div>
        </div>

        <div className="allrest d-flex w-100">
          <div className="w-20 d-flex justify-content-center side">
            <div className="restallfood w-100">FOODS AVAILABLE</div>
          </div>
          <div className="restContainer w-100">
            <div class="card w-80 m-3">
              <div class="card-body m-3">
                <h5 class="card-title">Lats EAT Restaurant</h5>
                <p class="card-text">
                <ul type="square">
                    <li>Item:vegetables</li>
                    <li>Quantity:15 kg</li>
                    <li>Expiry time:Tomorrow</li>
                  </ul>
                 
                <a href="#" class="btn btn-primary">
                  Collect
                </a>
                </p>
              </div>

              

           
            </div>
            <div class="card w-80 m-3">
              <div class="card-body m-3">
                <h5 class="card-title">Ghosh Restaurant</h5>
                <p class="card-text">
                <ul type="square">
                  
                  <li> Item:meats,</li>
                  <li> Quantity:8 kg,</li>
                  <li>Expiry time:Tomorrow Morning</li>
                </ul>
              
                <a href="#" class="btn btn-primary">
                  Collect
                </a>
                </p>
              </div>

              

           
            </div>
            <div class="card w-80 m-3">
              <div class="card-body m-3">
                <h5 class="card-title">Ruchika Restaurant</h5>
                <p class="card-text">
                <ul type="square">
                    <li>Item:meat</li>
                    <li>Quantity:25 kg</li>
                    <li>Expiry time:After 9 hours</li>
                  </ul>
                
                <a href="#" class="btn btn-primary">
                  Collect
                </a>
                </p>
              </div>
            </div>
            <div class="card w-80 m-3">
              <div class="card-body m-3">
                <h5 class="card-title">Tripti Restaurant</h5>
                <div class="card-text">
                  <ul type="square">
                    <li>Item:others</li>
                    <li>Quantity:15 kg</li>
                    <li>Expiry time:After 9 hours</li>
                  </ul>
                <a href="#" class="btn btn-primary">
                  Collect
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
 <div className='Ngo-home-page' style={{ width: "100%" }}>
                <div style={{ margin: 0, width: "100%", padding: "0", background: "black", overflow: "hidden", position: "relative", textAlign: "center", color: "white" }}>
                    <img src={NGO} className="d-block w-100 " alt="..." style={{ opacity: "0.4", objectFit: "cover", height: "100vh" }} />
                    <div className='center-text'>“There's enough on this planet for everyone's needs but not if you keep wasting.”</div>
                </div>
            </div>
            <div className="restContainer">
          </div>
          </div>
    </>
  );
}

export default Ngo_home;
