
import Food from './all-img/Food.jpg'
import React from "react";
import { Link } from "react-router-dom";
import veg from './all-img/Vegetables.jpg'
import meat from './all-img/Meat.jpg'
import cdf from './all-img/CookedFood.jpg'
import oth from './all-img/Paneer.jpg'

function Rest_home() {
    return (

        <>
            <div className="Rest-home-page" style={{ width: "100%" }}>
                <div style={{
                    margin: 0,
                    width: "100%",
                    padding: "0",
                    background: "black",
                    overflow: "hidden",
                    position: "relative",
                    textAlign: "center",
                    color: "white",
                }}>
                <img
                    src={Food}
                    className="d-block w-100"
                    alt="..."
                    style={{ opacity: "0.4", objectFit: "cover", height: "100vh" }}
                />
                <div className="center-text">
                    “Cutting food waste is a delicious way of helping to feed the world
                    and protect the planet.”{" "}
                </div>
            </div>

        </div >
      
       

           

            <h3 className="2nd-heading m-3 text-center">Add your food here</h3>

            < div className="d-flex restContainer  row">
               
                <div class="card  col-sm-3  p-2" >
                    <img class="card-img-top" src={veg}
                        alt="Card image cap" />

                    <div class="card-body">
                        <h5 class="card-title">
                            Vegetables
                        </h5>
                        <div className="card-body  d-flex flex-column justify-content-center ">
        <Link to="/next_res" dis className="btn btn-primary ">
          Add
        </Link>
      </div>
      </div>
      </div>
      
                
                <div class="card  col-sm-3  p-2" >
                    <img class="card-img-top" src={meat}
                        alt="Card image cap" />

                    <div class="card-body ">
                        <h5 class="card-title">
                            Meat
                        </h5>
                        <div className="card-body  d-flex flex-column justify-content-center ">
        <Link to="/next_res" dis className="btn btn-primary ">
          Add
        </Link>
      </div>
                    </div>
                </div>
                <div class="card col-sm-3  p-2" >
                    <img class="card-img-top" src={cdf}
                        alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">
                            Cooked Food
                        </h5>
                        <div className="card-body  d-flex flex-column justify-content-center ">
        <Link to="/next_res" dis className="btn btn-primary ">
          Add
        </Link>
      </div>
                    </div>
                </div>
                <div class="card col-sm-3  p-2" >
                    <img class="card-img-top" src={oth}
                        alt="Card image cap" />

                    <div class="card-body">
                        <h5 class="card-title">
                            Others
                        </h5>
                        <div className="card-body  d-flex flex-column justify-content-center ">
        <Link to="/next_res" dis className="btn btn-primary ">
          Add
        </Link>
      </div>
                    </div>
                </div>
            </div>

            

        </>
    )
}

export default Rest_home

