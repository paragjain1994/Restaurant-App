import React, { useContext } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
  console.log('from MealItemForm comp'+props.item);   // console.log(props) is also same!
  const cartcntx = useContext(CartContext);
  
  const addItemToCart = (event) => {
    event.preventDefault();
    //cartcntx.items.push(props.item);
    const quantity = document.getElementById("amount_" +props.id).value;
    console.log('quantity of selected item :'+quantity);
    cartcntx.addItem({...props.item, quantity: quantity}); // basically function calling addItemToCartHandler
    console.log('AddItemTo cart'+cartcntx.items.length)    // in the CartProvider component
  };

  return (
    <form className={classes.form}>
      {console.log("inside form"+cartcntx)}
      <Input
        label="Amount"
        input={{
          id: "amount_" +props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
