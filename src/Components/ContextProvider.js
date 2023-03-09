import React, { useReducer, useState } from "react";
import ReactDOM from "react-dom/client";
import { CartContext, productsContext, showCartContext } from "./Context";

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
      break;

    case "REMOVE":
      updatedItems = state.items.filter((item) => item.id !== action.item.id);
      updatedTotalAmount = state.totalAmount - action.item.price;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

      break;
  }
  return defaultCartState;
};

function ContextProvider(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
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
    handleClose : handleClose,
    handleShow : handleShow,
    show : show,
  }
  return (
    <CartContext.Provider value={cartContext}>
      <productsContext.Provider value={products}>
        <showCartContext.Provider value={showContext}>
          {props.children}
        </showCartContext.Provider>
      </productsContext.Provider>
    </CartContext.Provider>
  );
}

export default ContextProvider;
