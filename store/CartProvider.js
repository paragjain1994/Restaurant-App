import CartContext from './cart-context';

const CartProvider = (props) => {


  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: 0,
    removeItem: 0,
    msg: 'I am accessible anywhere'
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;