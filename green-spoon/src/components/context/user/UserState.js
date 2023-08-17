import React, { useState } from "react";
import userContext from "./userContext";

import { useAuth0 } from "@auth0/auth0-react";
function UserState(props) {
  const { user,isAuthenticated } = useAuth0();
 
    const host = "http://localhost:4000";
    const itemsInitial = [];
   
  const [Items, setItems] = useState(itemsInitial);
  const [orderItems, setorderItems] = useState(itemsInitial);
  const [User,setUser] = useState({name:"",email:"",type:""})
    //Add user
  const adduser = async ( username, email,type ) => {
    //api call
    setUser({name:username,email:email,type:type})
    console.log({username});
    const response = await fetch(`${host}/api/server/createuser`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({email,username,type} ),
     
    });

    const json = await response.json();

    console.log("Adding user" + json);
  };

//get user
const getuser = async (email) => {
  console.log(email)
  //api call
  //setUser({name:username,email:useremail,type:type})
 // console.log({username});
  const response = await fetch(`${host}/api/server/getuser`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify( {email}),
   
  });

  const json = await response.json();
  console.log(json)
  if (json.success){
    // Save the auth token and redirect
    localStorage.setItem('token', json.authtoken);  

  }
  else{
      alert("Invalid credentials");
  }
};


//get items
  const getitems = async () => {
    //api call
    
    const response = await fetch(`${host}/api/server/getitems`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
       
      },

    });

    const json = await response.json();

    console.log(json);

    setItems(json);
  };

  const additem = async ({name,item,quantity,exp}) => {
    //api call
    
    console.log(name);
    const response = await fetch(`${host}/api/server/putitems`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token'),
       
      },

      body: JSON.stringify({name,item,quantity,exp}), // body data type must match "Content-Type" header
    });

    const json = await response.json();

    console.log("Adding new item" + json);

    setItems(Items.concat(json));
  };




  const getfood = async () => {
    //api call
    
    const response = await fetch(`${host}/api/server/getfood`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token'),
      },

    });

    const json = await response.json();

    console.log(json);

    setItems(json);
  };

  //addorder
  const addorder = async (orderItem) => {
    const newitem = Items.filter((Items) => Items._id !== orderItem._id);
    setItems(newitem);
    //api call
   console.log(orderItem)
    const response = await fetch(`${host}/api/server/putorder`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token'),
       
      },

      body: JSON.stringify(orderItem), // body data type must match "Content-Type" header
    });

    const json = await response.json();

    console.log("Adding new item" + json);

    setorderItems(orderItems.concat(json));
  };

  //get order food
  const getorderfood = async () => {
    //api call
    
    const response = await fetch(`${host}/api/server/getorderfood`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token'),
      },

    });

    const json = await response.json();

    console.log(json);

    setorderItems(json);
  };

  //get taken order
  const takenorder = async () => {
    //api call
    
    const response = await fetch(`${host}/api/server/takenorder`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token'),
      },

    });

    const json = await response.json();

    console.log(json);

    setorderItems(json);
  };
  return (
    <userContext.Provider value={{ adduser,additem,Items,getitems,getuser,getfood,addorder,getorderfood ,orderItems,takenorder}}>
    {props.children}
  </userContext.Provider>
  )
}

export default UserState