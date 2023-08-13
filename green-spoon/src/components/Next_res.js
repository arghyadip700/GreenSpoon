



import React from 'react'

export default function Next_res() {
  return (
    <div>
      <center><h2><u>Add Food</u></h2></center>
      <form  method="post" id="FOOD">
	<h4>
	<div class="field">
		<label for="items">Items:</label>
		<input type="text" id="name" name="name" placeholder="Add your food items" />
		<small></small>
	</div>
	<div class="field">
		<label for="amount">Amount:</label>
		<input type="text" id="amount" name="amount" placeholder="Enter amount" />
		<small></small>
	</div>
	< div class = "input-container" >
		<label for="expiry time">Expiry time:</label>
		
		
		<input type="text" id="expiry time" name="expiry time"  placeholder="Enter  expected expiry time" required />
		<small></small>
	</div>
	</h4>
	<br></br>

	<button type="submit">ADD</button>
	
</form>


      </div>
  )
}

