import React, { useContext, useEffect } from "react";
import userContext from "./context/user/userContext";

function Addeditems() {
  const context = useContext(userContext);
  const { Items, getItems } = context;

  useEffect(() => {
    getItems();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="row my-3 justify-content-center">
        {Items.length === 0 && 'No items to display'}
        {Items.map((Item) => {
          return (
            <div className="item-card" key={Item._id}>
              <div className="item-card-inner">
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
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Addeditems;
