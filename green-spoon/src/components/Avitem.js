import React, { useContext, useEffect } from "react";
import userContext from "./context/user/userContext";

function Avitem() {
  const context = useContext(userContext);
  const { Items, getFood, addOrder } = context;

  useEffect(() => {
    getFood();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="my-3 row justify-content-center w-60">
        {Items.length === 0 && 'No items to display'}
        {Items.map((Item) => (
          <div className="item-card" key={Item._id}>
            <div className="item-card-inner">
              <h3 className="res_name">{Item.name}</h3>
              <div className="d-flex">
                <h6 className="mx-2 my-0">Item:</h6>
                <h6 className="item_d">{Item.Item}</h6>
              </div>
              <div className="d-flex">
                <h6 className="mx-2 my-0">Quantity:</h6>
                <h6 className="item_d">{Item.Quantity}</h6>
              </div>
              <div className="d-flex">
                <h6 className="mx-2 my-0">Exp-date:</h6>
                <h6 className="item_d">{Item.Expdate}</h6>
              </div>
              <div className="col-md-12 text-center">
                <button
                  onClick={() => {
                    addOrder(Item);
                  }}
                >
                  Collect
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Avitem;
