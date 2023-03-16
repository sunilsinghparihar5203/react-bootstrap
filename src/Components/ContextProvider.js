import React, { useState, useEffect } from "react";
import {
  CartContext,
  productsContext,
  showCartContext,
  authContext,
} from "./Context";
import axios from "axios";

function ContextProvider(props) {
  const initialToken = localStorage.getItem("token");
  const initialEmail = localStorage.getItem("email");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState(initialEmail);
  const isLoggin = !!token;

  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    getExpenceData(email);
  }, []);

  const calculateTotal = (arr) => {
    let sum = 0;
    arr.forEach((element) => {
      sum = sum + element.price;
    });
    setTotalAmount(sum);
  };

  const getExpenceData = (email) => {
    axios
      .get(`https://crudcrud.com/api/276ce21994ac4534a93c597fcedfcfac/${email}`)
      .then((res) => {
        setCartItems(res.data);
        calculateTotal(res.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteExpenceData = (email, id) => {
    axios
      .delete(
        `https://crudcrud.com/api/276ce21994ac4534a93c597fcedfcfac/${email}/${id}`
      )
      .then((res) => {
        getExpenceData(email);
      })
      .catch((err) => console.log(err));
  };

  const addItemToCrud = (data, email) => {
    axios
      .post(
        `https://crudcrud.com/api/276ce21994ac4534a93c597fcedfcfac/${email}`,
        {
          email: email,
          itemId: data.id,
          title: data.title,
          price: data.price,
          image: data.image,
          qty: data.qty,
        }
      )
      .then((res) => {
        getExpenceData(email);
      })
      .catch((err) => console.log({ err: err }));
  };

  const addItemToCartHandler = (item) => {
    addItemToCrud(item, email);
    console.log("Item added")
    console.log({cartItems:cartItems,totalAmount:totalAmount})
  };

  const removeItemFromCartHandler = (id) => {
    deleteExpenceData(email, id);
    console.log("Item removed")
    console.log({cartItems:cartItems,totalAmount:totalAmount})
  };

  const cartContext = {
    items: cartItems,
    totalAmount: totalAmount,
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
    getExpenceData(email);
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
