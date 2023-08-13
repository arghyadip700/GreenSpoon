
import React from "react";
import { Link } from "react-router-dom";
import React from 'react'
import ab from './all-img/Food.jpg'
import veg from './all-img/Vegetables.jpg'
import meat from './all-img/Meat.jpg'
import cdf from './all-img/CookedFood.jpg'
import oth from './all-img/Paneer.jpg'
import { Link } from 'react-router-dom'

function Rest_home() {
    return (
        <>
         

            <h3 className="2nd-heading m-3 text-center">Add your food here</h3>
            <div className="restContainer m-5">
                {/* <div className="card mx-5" style={{ width: "18rem" }}>
                    <img src={veg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Vegetables</h5>
                        <a href="/" className="btn btn-primary">ADD</a>
                    </div>
                </div>
                <div className="card mx-5" style={{ width: "18rem" }}>
                    <img src={meat} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Meat</h5>
                        <a href="/" className="btn btn-primary">ADD</a>
                    </div>
                </div>
                <div className="card mx-5" style={{ width: "18rem" }}>
                    <img src={cdf} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Cooked Food</h5>
                        <a href="/" className="btn btn-primary">ADD</a>
                    </div>
                </div>
                <div className="card mx-5" style={{ width: "18rem" }}>
                    <img src={oth} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Others</h5>
                        <a href="/" className="btn btn-primary">ADD</a>
                    </div>
                </div> */}
                <div class="card mx-auto" style={{ width: "18rem" }}>
                    <img class="card-img-top" src={veg}
                        alt="Card image cap" />

                    <div class="card-body">
                        <h5 class="card-title">
                            Vegetables
                        </h5>
                        <a href="/" class="btn btn-success">
                            ADD
                        </a>
                    </div>
                </div>
                <div class="card mx-auto" style={{ width: "18rem" }}>
                    <img class="card-img-top" src={meat}
                        alt="Card image cap" />

                    <div class="card-body">
                        <h5 class="card-title">
                            Meat
                        </h5>
                        <a href="/" class="btn btn-success">
                            ADD
                        </a>
                    </div>
                </div>
                <div class="card mx-auto" style={{ width: "18rem" }}>
                    <img class="card-img-top" src={cdf}
                        alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">
                            Cooked Food
                        </h5>
                        <a href="/" class="btn btn-success">
                            ADD
                        </a>
                    </div>
                </div>
                <div class="card mx-auto" style={{ width: "18rem" }}>
                    <img class="card-img-top" src={oth}
                        alt="Card image cap" />

                    <div class="card-body">
                        <h5 class="card-title">
                            Others
                        </h5>
                        <a href="/" class="btn btn-success">
                            ADD
                        </a>
                    </div>
                </div>
            </div>

            <div className="restContainer">
                
                
                <h3>Add your food here</h3>

            </div>
            <div class="card-body  d-flex flex-column justify-content-center "> 
    <a href="/next_res" dis class="btn btn-primary " >Add Food</a>
  </div>
            <h3 className="2nd-heading m-3 text-center">Add your food here</h3>
            <div className="restContainer m-5">
                {/* <div className="card mx-5" style={{ width: "18rem" }}>
                    <img src={veg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Vegetables</h5>
                        <a href="/" className="btn btn-primary">ADD</a>
                    </div>
                </div>
                <div className="card mx-5" style={{ width: "18rem" }}>
                    <img src={meat} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Meat</h5>
                        <a href="/" className="btn btn-primary">ADD</a>
                    </div>
                </div>
                <div className="card mx-5" style={{ width: "18rem" }}>
                    <img src={cdf} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Cooked Food</h5>
                        <a href="/" className="btn btn-primary">ADD</a>
                    </div>
                </div>
                <div className="card mx-5" style={{ width: "18rem" }}>
                    <img src={oth} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Others</h5>
                        <a href="/" className="btn btn-primary">ADD</a>
                    </div>
                </div> */}
                <div class="card mx-auto" style={{ width: "18rem" }}>
                    <img class="card-img-top" src={veg}
                        alt="Card image cap" />

                    <div class="card-body">
                        <h5 class="card-title">
                            Vegetables
                        </h5>
                        <a href="/" class="btn btn-success">
                            ADD
                        </a>
                    </div>
                </div>
                <div class="card mx-auto" style={{ width: "18rem" }}>
                    <img class="card-img-top" src={meat}
                        alt="Card image cap" />

                    <div class="card-body">
                        <h5 class="card-title">
                            Meat
                        </h5>
                        <a href="/" class="btn btn-success">
                            ADD
                        </a>
                    </div>
                </div>
                <div class="card mx-auto" style={{ width: "18rem" }}>
                    <img class="card-img-top" src={cdf}
                        alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">
                            Cooked Food
                        </h5>
                        <a href="/" class="btn btn-success">
                            ADD
                        </a>
                    </div>
                </div>
                <div class="card mx-auto" style={{ width: "18rem" }}>
                    <img class="card-img-top" src={oth}
                        alt="Card image cap" />

                    <div class="card-body">
                        <h5 class="card-title">
                            Others
                        </h5>
                        <a href="/" class="btn btn-success">
                            ADD
                        </a>
                    </div>
                </div>
            </div>

            {/* {/* <div className="card-body  d-flex flex-column justify-content-center ">
                <a href="/next_res" dis className="btn btn-primary " >Add Food</a>
            </div> */}
        </>
    )
}

export default Rest_home

