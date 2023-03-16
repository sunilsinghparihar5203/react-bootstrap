import React, { useReducer, useState } from "react";
import {
  CartContext,
  productsContext,
  showCartContext,
  authContext,
} from "./Context";
import axios from "axios";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  var updatedTotalAmount;
  var updatedItems = [];
  switch (action.type) {
    case "ADD":
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      const existingCartItem = state.items[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          qty: existingCartItem.qty + action.item.qty,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
        updatedTotalAmount = state.totalAmount + action.item.price;
      } else {
        updatedItems = state.items.concat(action.item);
        updatedTotalAmount = state.totalAmount + action.item.price;
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    case "REMOVE":
      updatedItems = state.items.filter((item) => item.id !== action.id);
      let itemToBeRemoved = state.items.filter((item) => item.id === action.id);
      console.log({itemToBeRemoved:itemToBeRemoved})
      updatedTotalAmount = state.totalAmount - itemToBeRemoved[0].price;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    default:
      console.log("This is default case");
  }
  return defaultCartState;
};

function ContextProvider(props) {
  const initialToken = localStorage.getItem("token");
  const initialEmail = localStorage.getItem("email");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState(initialEmail);
  const isLoggin = !!token;

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    if (isLoggin) {
      dispatchCartAction({ type: "ADD", item: item });
      addItemToCrud(item);
    } else {
      alert("Please login first!");
    }
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
    // deleteExpenceData(id)
  };

  const cartContext = {
    ...cartState,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  const products = [
    {
      id: "1",
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: "2",
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: "3",
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: "4",
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const showContext = {
    handleClose: handleClose,
    handleShow: handleShow,
    show: show,
  };

  const loginHandler = (token, email) => {
    setToken(token);
    setEmail(email);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const authContextData = {
    token: token,
    isLoggin: isLoggin,
    login: loginHandler,
    logout: logoutHandler,
    email: email,
  };

  const addItemToCrud = (data) => {
    axios
      .post(
        `https://crudcrud.com/api/c112599649ff410790bebb7a8f5ea199/${email}`,
        {
          email: email,
          amount: data.totalAmount,
          itemId :data.id,
          title: data.title,
          price: data.price,
          image: data.image,
        }
      )
      .then((res) => {
        console.log({ saved: res });
      })
      .catch((err) => console.log({ err: err }));
  };

  const getExpenceData = () => {
    axios
      .get(`https://crudcrud.com/api/88838ed14e7b4f53b789b3fb8c6d537b/${email}`)
      .then((res) => console.log({getdata : res.data}))
      .catch((err) => console.log(err));
  };

  const deleteExpenceData = (id) => {
    axios
      .get(`https://crudcrud.com/api/88838ed14e7b4f53b789b3fb8c6d537b/${email}/${id}`)
      .then((res) => console.log({deleteRes : res.data}))
      .catch((err) => console.log(err));
  };

  window.onload = function () {
    getExpenceData();
  };

  return (
    <CartContext.Provider value={cartContext}>
      <productsContext.Provider value={products}>
        <showCartContext.Provider value={showContext}>
          <authContext.Provider value={authContextData}>
            {props.children}
          </authContext.Provider>
        </showCartContext.Provider>
      </productsContext.Provider>
    </CartContext.Provider>
  );
}

export default ContextProvider;
