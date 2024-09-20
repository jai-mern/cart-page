import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cart } = useContext(CartContext);

  // Calculate total quantity and amount
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Cart</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>+</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </tbody>
      </table>
      <h2>Total Quantity: {totalQuantity}</h2>
      <h2>Total Amount: ${totalAmount}</h2>
    </div>
  );
};

export default Cart;
