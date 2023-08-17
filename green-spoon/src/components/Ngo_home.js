import React from "react";
import NGO from "./all-img/istockphoto-.jpg";
import { useNavigate } from "react-router-dom";
import Avitem from "./Avitem";
function Ngo_home() {
  let navigate = useNavigate();
  const pagechange=()=>{
    let path = `/Yourorder`; 
    navigate(path);

  }
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

        <div className="allrest d-flex  ">
        <div className="sidebar w-20 ">
        <h2>Available Food Items</h2>
      </div>
      <div className="w-60">
          <Avitem/>
          </div>
        </div>
      
        <div className="button-container w-20">
          <button className="arrow-button " onClick={pagechange}>
            <span><i class="fa-solid fa-plate-wheat"></i></span>
          </button>
        </div>
      </div>

 {/* <div className='Ngo-home-page' style={{ width: "100%" }}>
                <div style={{ margin: 0, width: "100%", padding: "0", background: "black", overflow: "hidden", position: "relative", textAlign: "center", color: "white" }}>
                    <img src={NGO} className="d-block w-100 " alt="..." style={{ opacity: "0.4", objectFit: "cover", height: "100vh" }} />
                    <div className='center-text'>“There's enough on this planet for everyone's needs but not if you keep wasting.”</div>
                </div>
            </div>
            <div className="restContainer">
          </div> */}
    </>
  );
}

export default Ngo_home;
