import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartcntx = useContext(CartContext);
  console.log("seeing cart" + cartcntx.items);
  console.log("length of cart" + cartcntx.items.length);

  const reduceItemFromCart = (id) => {
    console.log("reduce");
    cartcntx.removeItem(id);
  };

  const increaseItemInCart = (id) => {
    console.log("increase");
    cartcntx.increaseItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartcntx.items.map((item) => (
        <li key={item.id} id={item.id} value={item.quantity}>
          Name: {item.name} Price: {item.price} Quantity: {item.quantity} Total
          Price: {(item.price * item.quantity).toFixed(2)} Id: {item.id}
          <button className={"reduce"} onClick={()=>reduceItemFromCart(item.id)}>
            -
          </button>
          <button className={"increase"} onClick={()=>increaseItemInCart(item.id)}>
            +
          </button>
        </li>
      ))}
    </ul>
  );

  let totalAmount = 0;
  cartcntx.items.forEach((item) => {
    totalAmount = totalAmount + item.price * item.quantity;
  });

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
