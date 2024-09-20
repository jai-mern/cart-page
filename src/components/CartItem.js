import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartItem = ({ item }) => {
  const { increaseQuantity, decreaseQuantity } = useContext(CartContext);

  return (
    <tr>
      <td>{item.name}</td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <button onClick={() => increaseQuantity(item.id)}>+</button>
      </td>
      <td>
        <button onClick={() => decreaseQuantity(item.id)}>-</button>
      </td>
    </tr>
  );
};

export default CartItem;
