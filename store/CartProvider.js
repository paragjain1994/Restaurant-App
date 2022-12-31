import React , {useState} from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
 const [items,updateItems] = useState([]);

 const addItemToCartHandler=(item)=>{
  console.log(item.quantity);
  updateItems([...items,item]);
  console.log('inside addItemToCartHandler',cartContext);
 }

 
 const removeItemFromCartHandler=(id)=>{}



  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    msg: 'I am accessible anywhere'
  };

  return (
    <CartContext.Provider value={cartContext}>
      {console.log('Inside CartContext.Provider', cartContext)}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;