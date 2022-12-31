import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartcntx = useContext(CartContext);
  console.log('seeing cart'+cartcntx.items[2])
  console.log('length of cart'+cartcntx.items.length)
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartcntx.items.map((item) => (
        <li>
          Name: {item.name} Price: {item.price} Quantity: {item.quantity} Total Price: {item.price * item.quantity}
        </li>
      ))}
    </ul>
  );

  let totalAmount =0;
  cartcntx.items.forEach(item=>{
    totalAmount=totalAmount+item.price*item.quantity;
  })


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
