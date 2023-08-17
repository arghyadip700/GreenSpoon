
import React ,{useState,useContext} from 'react'
import userContext from "./context/user/userContext";
import Addeditems from "./Addeditems";
import { useAuth0 } from "@auth0/auth0-react";
export default function Next_res() {
	const context = useContext(userContext);
	var names;
	const {additem} = context;
	const [items,setitems] = useState({item:"",quantity:"",exp:""})
	
	const handleclick =(e)=>{
	  e.preventDefault();
	
	  additem(items);
	 

	  setitems({item:"",quantity:"",exp:""})
	}
	const onchange = (e)=>{
	  setitems({...items,[e.target.name]: e.target.value})
	}
  return (
	<>
    <div className='res-body'>
      <center><h2><u>Add Food</u></h2></center>
      <form  className='w-60vw d-flex flex-column align-item-center' method="post" id="FOOD">
	{/* {isAuthenticated?(
		<input  className=" d-lg-none " type="text" id="name" name="name" value={user.name}  />
	):(
		<input  className=" d-lg-none " type="text" id="name" name="name" value={"xyz"}  />
	)} */}
	<div class="field  m-3">
		<label className="  col-sm-6" for="items ">Items:</label>
		<input  className="  col-sm-6" type="text" id="name" name="item" value={items.item}  onChange={onchange} placeholder="Add your food items" />
		<small></small>
	</div>
	<div class="field  m-3">
		<label className="  col-sm-6" for="amount">Amount:</label>
		<input  className="  col-sm-6" type="number" id="amount" name="quantity" value={items.quantity} onChange={onchange} placeholder="Enter quantity" />
		<small></small>
	</div>
	< div class = "input-container m-3" >
		<label className="  col-sm-6 "  for="expiry time">Expiry time:</label>
		
		
		<input  className="  col-sm-6 " type="datetime-local" id="expiry time" name="exp"  
		value={items.exp}
		onChange={onchange}
			placeholder="Enter  expected expiry time" required />
		<small></small>
	</div>
	
	<br></br>

	<div class="col-md-12 text-center">
            <button type="button" className="btn btn-primary m-3" onClick={handleclick}>Submit</button>
            <button type="button" className="btn btn-warning m-3">Cancel</button>
        </div>
	
</form>

            


      </div>
	  <h3> all items</h3>
	  <Addeditems/>
	  </>
  )
}
