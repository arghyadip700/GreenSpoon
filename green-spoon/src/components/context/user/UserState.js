import React, { useState } from "react";
import userContext from "./userContext";
import { useAuth0 } from "@auth0/auth0-react";

function UserState(props) {
  const { user, isAuthenticated } = useAuth0();
  const host = "http://localhost:4000";
  const itemsInitial = [];

  const [Items, setItems] = useState(itemsInitial);
  const [orderItems, setOrderItems] = useState(itemsInitial);
  const [User, setUser] = useState({ name: "", email: "", type: "" });

  // Add user
  const addUser = async (username, email, type) => {
    setUser({ name: username, email: email, type: type });
    const response = await fetch(`${host}/api/server/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, username, type }),
    });
    const json = await response.json();
    console.log("Adding user" + json);
  };

  // Get user
  const getUser = async (email) => {
    const response = await fetch(`${host}/api/server/getuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem('token', json.authtoken);
    } else {
      alert("Invalid credentials");
    }
  };

  // Get items
  const getItems = async () => {
    const response = await fetch(`${host}/api/server/getitems`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
    });
    const json = await response.json();
    setItems(json);
  };

  const addItem = async ({ name, item, quantity, exp }) => {
    const response = await fetch(`${host}/api/server/putitems`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
      body: JSON.stringify({ name, item, quantity, exp }),
    });
    const json = await response.json();
    setItems(Items.concat(json));
  };

  const getFood = async () => {
    const response = await fetch(`${host}/api/server/getfood`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
    });
    const json = await response.json();
    setItems(json);
  };

  const addOrder = async (orderItem) => {
    const newItem = Items.filter((item) => item._id !== orderItem._id);
    setItems(newItem);
    const response = await fetch(`${host}/api/server/putorder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
      body: JSON.stringify(orderItem),
    });
    const json = await response.json();
    setOrderItems(orderItems.concat(json));
  };

  const getOrderFood = async () => {
    const response = await fetch(`${host}/api/server/getorderfood`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
    });
    const json = await response.json();
    setOrderItems(json);
  };

  const takenOrder = async () => {
    const response = await fetch(`${host}/api/server/takenorder`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
    });
    const json = await response.json();
    setOrderItems(json);
  };

  return (
    <userContext.Provider value={{ addUser, addItem, Items, getItems, getUser, getFood, addOrder, getOrderFood, orderItems, takenOrder }}>
      {props.children}
    </userContext.Provider>
  );
}

export default UserState;
