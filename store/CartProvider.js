import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  // being invoked from MealItemForm comp cartcntx.addItem({ ...props.item, quantity: quantity })
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

  // being invoked from Cart comp cartcntx.increaseItem(id)
  const increaseItemInCartHandler = (id) => {
    const idx = items.findIndex((i) => i.id === id);
    let temp = [...items];
    temp[idx].quantity = Number(temp[idx].quantity) + 1;
    updateItems(temp);
  };

  // being invoked from Cart comp cartcntx.removeItem(id)
  const removeItemFromCartHandler = (id) => {
    const idx = items.findIndex((i) => i.id === id);
    let temp = [...items];
    temp[idx].quantity = Number(temp[idx].quantity) - 1;
    if (temp[idx].quantity > 0){
      updateItems(temp);
    }
    else {
      temp.splice(idx,1);
      updateItems(temp);
    }
    
  };



  const cartContext = {
    items: items,
    increaseItem: increaseItemInCartHandler,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    msg: "!",
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
