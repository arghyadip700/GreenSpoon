import React, { useState, useContext } from 'react';
import userContext from "./context/user/userContext";
import Addeditems from "./Addeditems";
import { useNavigate } from "react-router-dom";

export default function Next_res() {
  const navigate = useNavigate();
  const context = useContext(userContext);
  const { addItem } = context;

  const [items, setItems] = useState({ item: "", quantity: "", exp: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addItem(items);
    setItems({ item: "", quantity: "", exp: "" });
  };

  const handleChange = (e) => {
    setItems({ ...items, [e.target.name]: e.target.value });
  };

  const pageChange = () => {
    let path = `/Takenorder`; 
    navigate(path);
  };

  return (
    <>
      <div className='res-body'>
        <center><h2><u>Add Food</u></h2></center>
        <form className='w-60vw d-flex flex-column align-items-center' method="post" id="FOOD">
          <div className="field m-3">
            <label className="col-sm-6" htmlFor="item">Items:</label>
            <input
              className="col-sm-6"
              type="text"
              id="item"
              name="item"
              value={items.item}
              onChange={handleChange}
              placeholder="Add your food items"
              required
            />
          </div>
          <div className="field m-3">
            <label className="col-sm-6" htmlFor="quantity">Amount:</label>
            <input
              className="col-sm-6"
              type="number"
              id="quantity"
              name="quantity"
              value={items.quantity}
              onChange={handleChange}
              placeholder="Enter quantity"
              required
            />
          </div>
          <div className="input-container m-3">
            <label className="col-sm-6" htmlFor="exp">Expiry time:</label>
            <input
              className="col-sm-6"
              type="datetime-local"
              id="exp"
              name="exp"
              value={items.exp}
              onChange={handleChange}
              placeholder="Enter expected expiry time"
              required
            />
          </div>
          <div className="col-md-12 text-center">
            <button type="button" className="btn btn-primary m-3" onClick={handleClick}>Submit</button>
            <button type="button" className="btn btn-warning m-3">Cancel</button>
          </div>
        </form>
      </div>

      <h3>All Items</h3>
      <Addeditems />

      <div className="button-container w-20">
        <button className="arrow-button" onClick={pageChange}>
          <span><i className="fa-solid fa-circle-check"></i></span>
        </button>
      </div>
    </>
  );
}
