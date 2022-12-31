import React ,{useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";


const HeaderCartButton = (props) => {
  const cartcntx = useContext(CartContext);
  let quantity = 0;
  cartcntx.items.forEach(item => {
    quantity=quantity + Number(item.quantity)
  })
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>your cart</span>
      <span>{cartcntx.msg}</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default HeaderCartButton;
