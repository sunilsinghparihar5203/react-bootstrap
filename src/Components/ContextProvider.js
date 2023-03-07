import React, { useReducer } from "react";
import ReactDOM from "react-dom/client";
import CardContext from "./Context";

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
      if (!existingCartItem) {
        updatedItems = [
          ...state.items,
          {
            id: action.item.id,
            price: action.item.price,
            image: action.item.ImageURL,
            qty: 1,
            title: action.item.title,
          },
        ];
        updatedTotalAmount = state.totalAmount + action.item.price;
      } else {
        updatedItems = [...state.items];
        updatedTotalAmount = state.totalAmount;
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

  return (
    <CardContext.Provider value={cartContext}>
      {props.children}
    </CardContext.Provider>
  );
}

export default ContextProvider;