import React, { useContext, useEffect, useRef, useState } from "react";
import userContext from "./context/user/userContext";


function Avitem() {
    const context = useContext(userContext);
  const { Items,  getfood,addorder } = context;
  useEffect(() => {
    getfood();
    // eslint-disable-next-line
  }, []);
//   const orderitem=(Item)=>{
//     console.log(Item)
// addorder(Item)

//   }
  // const ref = useRef(null);
//   const refClose = useRef(null);
//   const [note, setNotes] = useState({
//     item:"",quantity:"",exp:""
//   });

//   const updatenote = (currentNote) => {
//     //ref.current.click();
//     setNotes({
//       id: currentNote._id,
//       etitle: currentNote.title,
//       edescription: currentNote.description,
//     });
//   };

//   const handleclick = () => {
//     console.log(note.id);
//     updatenotes(note.id, note.etitle, note.edescription);
//     refClose.current.click();
//   };
//   const onChange = (e) => {
//     setNotes({ ...note, [e.target.name]: e.target.value });
//   };

  return (
    <>
      {/* <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button> */}
      {/* <div className="item-card">
      <h2>itemName</h2>
      <p>itemDetails</p>
      <button >Collect</button>
    </div> */}
      <div className=" my-3 row justify-content-center w-60">
      {Items.length===0 && 'No items to display'}
        {Items.map((Item) => {
          return (
            <div className="item-card " key={Items._id}>
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
            <button 
                    onClick={() => {
                        addorder(Item);
                      }}
                  >Collect</button>

                 
                </div> 
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Avitem;
