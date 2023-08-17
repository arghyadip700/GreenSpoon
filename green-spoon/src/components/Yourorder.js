import React, { useContext, useEffect, useRef, useState } from "react";
import userContext from "./context/user/userContext";
import { useNavigate } from "react-router-dom";
function Yourorder() {
    let navigate = useNavigate();
    const pagechange=()=>{
        let path = `/Ngo_home`; 
        navigate(path);
    
      }
    const context = useContext(userContext);
  const { orderItems,  getorderfood } = context;
  useEffect(() => {
    getorderfood();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {/* <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button> */}
      
      <div className="row my-3 justify-content-center">
      {orderItems.length===0 && 'No items to display'}
        {orderItems.map((Item) => {
          return (
            <div className="item-card " key={Item._id}>
           <div className="item-card-inner ">
                <h3 className="res_name">{Item.name}</h3>
                <div className="d-flex">
                <h6 className="mx-2 my-0">Item:</h6>
                <h6 className="item_d">{Item.Item}</h6></div>
                <div className="d-flex">
                <h6 className="mx-2 my-0">Quantity:</h6>
                <h6 className="item_d">{Item.Quantity}</h6></div>
                <div className="d-flex">
                <h6 className="mx-2 my-0">Exp-date:</h6>
                <h6 className="item_d">{Item.Expdate}</h6></div>
                <div class="col-md-12 text-center ">
            {/* <button 
                    onClick={() => {
                        addorder(Item);
                      }}
                  >Collect</button>*/}

                 
                </div>  
              </div>
            </div>
          );
        })}
      </div>
      <div className="button-container w-20">
          <button className="arrow-button-left " onClick={pagechange}>
            <span><i class="fa-solid fa-house"></i></span>
          </button>
        </div>
    </>
  )
}

export default Yourorder