import React, { useState } from "react";
import userContext from "./userContext";


function UserState(props) {
    const host = "http://localhost:4000";
    const userInitial = [];
  
    const [user, setUser] = useState(userInitial);
    //Add notes to the list of notes
  const adduser = async ({ name, email,specific }) => {
    //api call
    const response = await fetch(`${host}/User/findOne`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
       
      },

      body: JSON.stringify({ name,email,specific }), // body data type must match "Content-Type" header
    });

    const json = await response.json();

    console.log("Adding user" + json);
  };
  return (
    <userContext.Provider value={{ adduser }}>
    {props.children}
  </userContext.Provider>
  )
}

export default UserState