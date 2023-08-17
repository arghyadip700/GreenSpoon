import React, { useContext, useEffect, useRef, useState } from "react";
import userContext from "./context/user/userContext";

function Addeditems() {
    const context = useContext(userContext);
  const { Items,  getitems } = context;
  useEffect(() => {
    getitems();
    // eslint-disable-next-line
  }, []);
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
      
      <div className="row my-3 justify-content-center">
      {Items.length===0 && 'No items to display'}
        {Items.map((Item) => {
          return (
            <div className="item-card " key={Items._id}>
            <div className="item-card-inner ">
              <div className="d-flex">
              <h6 className="mx-2 my-0">Item:</h6>
              <h6 className="item_d">{Item.Item}</h6></div>
              <div className="d-flex">
              <h6 className="mx-2 my-0">Quantity:</h6>
              <h6 className="item_d">{Item.Quantity}</h6></div>
              <div className="d-flex">
              <h6 className="mx-2 my-0">Exp-date:</h6>
              <h6 className="item_d">{Item.Expdate}</h6></div>
                {/* <div className="d-flex">
                  <i
                    className="fa-solid fa-trash m-2"
                    onClick={() => {
                      console.log("clicked");
                      deletenotes(note._id);
                    }}
                  ></i>

                  <i
                    className="fa-solid fa-pen-to-square m-2"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => {
                      updatenote(note);
                    }}
                  ></i>
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Addeditems;
