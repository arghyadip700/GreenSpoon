import React from "react";
import don from "./all-img/donation.jpg";
export default function Next_res() {
  return (
    <>
      <div className="Rest-home-page" style={{ width: "100%" }}>
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
          <img
            src={don}
            className="d-block w-100"
            alt="..."
            style={{ opacity: "0.4", objectFit: "cover", height: "100vh" }}
          />
          <div className="center-text">
		  <div className="Next-res-container">
        <center>
          <h2>
            <u>Add Food</u>
          </h2>
		  
        </center><br></br>
        <form method="post" id="FOOD">
          <h4>
		<div class="field">
              <label for="items">Items:</label>
              
               
				<select>
				<option value="veg">Vegetables</option>
				<option value="meat">Meat</option>
				<option value="cooked food">Cooked Food</option>
				<option value="others">others</option>
				</select>

              
				
            </div>
			
            <div class="field">
              <label for="amount">Quantity:</label>
              <input
                type="number"
                id="amount"
                
                placeholder="Enter amount"
              />
              <small></small>
            </div>
            <div class="input-container">
              <label for="expiry time">Expiry time:</label>

              <input
                type="text"
                id="expiry time"
                name="expiry time"
                placeholder="expected expiry time"
                required
              />
              <small></small>
            </div>
          </h4>
          <br></br>

          <button type="submit">ADD</button>
        </form>
      </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
