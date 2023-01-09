import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartcntx = useContext(CartContext);
  console.log("seeing cart" + cartcntx.items);
  console.log("length of cart" + cartcntx.items.length);

  const removeItemFromCart = (event) => {
    event.preventDefault();
    console.log("del");
    if (event.target.classList.contains("del")) {
      var list_ = event.target.parentElement; //ie jo target kiya hai (delete button) uska parent Element (li tag)
      console.log(list_);
      var id = event.target.parentElement.id;
      console.log(id);
    }

    cartcntx.removeItem(id); // removeItemFromCartHandler function of CartProvider comp will be invoked and targeted item's id will be passed as an argument
  };

  const reduceItemFromCart = (event) => {
    event.preventDefault();
    console.log("reduce");
    if (event.target.classList.contains("reduce")) {
      var list_ = event.target.parentElement;
      console.log(list_);
      var quant = event.target.parentElement.value;
      console.log("quant ="+quant);
      var id = event.target.parentElement.id;
      console.log(id);
    }
    cartcntx.removeItem(id,quant);
    
  };

  const increaseItemInCart = (event) => {
    event.preventDefault();
    console.log("increase");
    if (event.target.classList.contains("increase")) {
      var list_ = event.target.parentElement;
      console.log(list_);
      var quant = event.target.parentElement.value;
      console.log("quant ="+quant);
      var id = event.target.parentElement.id;
      console.log(id);
    }
    cartcntx.increaseItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartcntx.items.map((item) => (
        <li key={item.id} id={item.id} value={item.quantity}>
          Name: {item.name} Price: {item.price} Quantity: {item.quantity} Total
          Price: {(item.price * item.quantity).toFixed(2)} Id: {item.id}
          <button className={"reduce"} onClick={reduceItemFromCart}>
            -
          </button>
          <button className={"increase"} onClick={increaseItemInCart}>
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
