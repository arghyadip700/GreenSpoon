import React, { useState } from "react";
import userContext from "./userContext";


function UserState(props) {
    const host = "http://localhost:4000";
   
    //Add notes to the list of notes
  const adduser = async ({ name, email,type }) => {
    //api call
    const response = await fetch(`http://localhost:4000/user/findOne?email=${email}&username=${name}&type=${type}`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.

     
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