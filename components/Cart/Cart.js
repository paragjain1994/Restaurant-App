import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartcntx = useContext(CartContext);
  console.log("seeing cart" + cartcntx.items);
  console.log("length of cart" + cartcntx.items.length);
  //console.log("sele item id " + props.sel_itm_id);

 
const removeItemFromCart=(event)=>{
  event.preventDefault();
  console.log('del');
  if(event.target.classList.contains('del')){
    var list_ = event.target.parentElement;      //ie jo target kiya hai (delete button) uska parent Element (li tag)
    console.log(list_);
    var id = event.target.parentElement.id;  
    console.log(id);
  }

  cartcntx.removeItem(id); // removeItemFromCartHandler function of CartProvider comp will be invoke and targeted item's id will be passed as an argument
                     
}

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartcntx.items.map((item) => (
        <li key={item.id} id={item.id}>
          Name: {item.name} Price: {item.price} Quantity: {item.quantity} Total
          Price: {(item.price * item.quantity).toFixed(2)} Id: {item.id}
          <button className={'del'} onClick={removeItemFromCart}>delete</button>
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
