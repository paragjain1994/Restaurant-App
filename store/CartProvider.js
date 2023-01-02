import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemToCartHandler = (item) => {
    console.log(item.quantity); // quantity and id of the item which we have added from MealItemForm.js comp
    console.log(item.id);

    const idx = items.findIndex((i) => i.id === item.id);

    if (idx === -1) {
      updateItems([...items, item]);
    } else {
      let temp = [...items];
      temp[idx].quantity = Number(temp[idx].quantity) + Number(item.quantity);
      updateItems(temp);
    }

    console.log("inside addItemToCartHandler", cartContext);
  };

  const removeItemFromCartHandler = () => {};

  console.log("open " + items.length);

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    msg: "I am accessible anywhere",
  };
  console.log("carttt " + cartContext.items);
  return (
    <CartContext.Provider value={cartContext}>
      {console.log("Inside CartContext.Provider", cartContext)}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
